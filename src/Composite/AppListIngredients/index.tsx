'use client';

import styles from './index.module.scss';

import AppIngredientCard from '@/src/Composite/AppIngredientCard';
import { IngredientOption } from '@/src/Stores/type';
import { useEffect, useMemo } from 'react';
import { appStore } from '@/src/Stores';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

const AppListIngredients = observer(() => {
  useEffect(() => {
    appStore.fillListIngredients();
  }, []);

  const filterListIngredients = useMemo(() => {
    if (!appStore.listIngredients) {
      return [];
    }
    const searchValue = appStore.ingredientSearchValue.toLocaleLowerCase();
    let filteredIngredients = appStore.listIngredients.filter((ingredient) => {
      const name = ingredient?.name?.toLocaleLowerCase();
      return name?.includes(searchValue);
    });

    if (
      appStore.ingredientSelectedValue === IngredientOption.vegan ||
      appStore.ingredientSelectedValue === IngredientOption.vegetarian
    ) {
      filteredIngredients = filteredIngredients.filter((item: any) =>
        item?.groups?.includes(appStore.ingredientSelectedValue)
      );
    }

    return filteredIngredients;
  }, [
    appStore.listIngredients,
    appStore.ingredientSelectedValue,
    appStore.ingredientSearchValue
  ]);

  return (
    <div className={styles.container}>
      {filterListIngredients.length ? (
        <div className={styles.list}>
          {filterListIngredients?.map((item, index) => (
            <AppIngredientCard
              groups={item?.groups}
              name={item?.name}
              options={toJS(item?.options)}
              key={index}
            />
          ))}
        </div>
      ) : (
        <div className={styles.notFound}>Data not found</div>
      )}
    </div>
  );
});

export default AppListIngredients;
