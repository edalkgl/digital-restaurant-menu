'use client';

import styles from './index.module.scss';

import AppMealIngredientCard from '@/src/Composite/AppMealIngredientCard';
import { stringToSlug } from '@/src/Helpers/stringHelper';
import { mealImageUri } from '@/src/Helpers/imageHelper';
import AppQuality from '@/src/Components/AppQuality';
import AppLoader from '@/src/Components/AppLoader';
import { mealMocks } from '@/src/Mocks/mealMocks';
import AppImage from '@/src/Components/AppImage';
import AppPrice from '@/src/Components/AppPrice';
import AppScore from '@/src/Components/AppScore';
import { useParams } from 'next/navigation';
import { appStore } from '@/src/Stores';
import { Key, useEffect } from 'react';
import { observer } from 'mobx-react';
import { runInAction } from 'mobx';
import { find } from 'lodash';

const AppMealDetail = observer(() => {
  const params = useParams();

  useEffect(() => {
    appStore.fillAMenu(params?.id);
  }, []);

  useEffect(() => {
    runInAction(() => {
      appStore.menuPrice = 0;
      appStore.menuQuality = 0;
      appStore.menuScore = 0;
    });
  }, [params?.id]);

  const filterMocks = find(mealMocks, { id: Number(params?.id) });

  return (
    <AppLoader loader={appStore.getAMenuLoader} className={styles.pageLoader}>
      <div className={styles.mealProfile} />
      {appStore.getAMenu ? (
        <section className={styles.mealSection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className={styles.title}>{appStore.getAMenu?.name}</h1>
                <div className={styles.mealHeadine}>
                  <picture className={styles.image}>
                    <AppImage
                      src={mealImageUri(
                        stringToSlug(String(appStore.getAMenu?.name))
                      )}
                      alt={appStore.getAMenu?.name || ''}
                      width={300}
                      height={150}
                      unoptimized
                      priority
                    />
                  </picture>
                  <div className={styles.wrapper}>
                    <div className={styles.headWrapper}>
                      <AppQuality score={appStore.menuQuality} />
                      <AppPrice price={appStore.menuPrice} />
                      <AppScore score={appStore.menuScore} />
                    </div>
                    <div className={styles.article}>{filterMocks?.content}</div>
                  </div>
                </div>
                {/* <div className={styles.optionsFilter}>
                  <div className="title">Other</div>
                </div> */}
                <div className={styles.ingredientsList}>
                  {appStore.getAMenu?.ingredients?.map((item, index: Key) => (
                    <AppMealIngredientCard
                      groups={item?.groups}
                      name={item?.name}
                      options={item?.options}
                      quantity={item?.quantity}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className={styles.notFoundSection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className={styles.title}>
                  The meal you were looking for could not be found.
                </h2>
              </div>
            </div>
          </div>
        </section>
      )}
    </AppLoader>
  );
});

export default AppMealDetail;
