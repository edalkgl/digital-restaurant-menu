'use client';

import cn from 'classnames';
import styles from './index.module.scss';

import { TIngredientQuality, TPerAmount } from '@/src/Stores/type';
import { ingredientImageUri } from '@/src/Helpers/imageHelper';
import { stringToSlug } from '@/src/Helpers/stringHelper';
import { Key, useCallback, useState } from 'react';
import AppImage from '@/src/Components/AppImage';

interface IProps {
  groups: Array<string>;
  name: string;
  options: Array<{
    name: string;
    per_amount: TPerAmount;
    price: number;
    quality: TIngredientQuality;
  }>;
}

const AppIngredientCard: React.FC<IProps> = ({ groups, name, options }) => {
  const [selectOption, setSelectOption] = useState<TIngredientQuality>('low');

  const filterOptions = useCallback(() => {
    return options.find((item: any) => item?.quality === selectOption);
  }, [selectOption]);

  return (
    <article className={styles.container}>
      <picture className={styles.image}>
        <AppImage
          src={ingredientImageUri(stringToSlug(name))}
          alt={'test'}
          width={150}
          height={150}
          unoptimized
          priority
        />
      </picture>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.groups}>
        {groups?.map((item, index: Key) => (
          <div className={styles.item} key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.qualityGroups}>
        <div
          className={cn(styles.item, {
            [styles.active]: selectOption === 'low'
          })}
          onClick={() => setSelectOption('low')}>
          low
        </div>
        <div
          className={cn(styles.item, {
            [styles.active]: selectOption === 'medium'
          })}
          onClick={() => setSelectOption('medium')}>
          medium
        </div>
        <div
          className={cn(styles.item, {
            [styles.active]: selectOption === 'high'
          })}
          onClick={() => setSelectOption('high')}>
          high
        </div>
      </div>
      <div className={styles.optionsLayer}>
        <div className={styles.name}>{filterOptions()?.name}</div>
        <div className={styles.line}>-</div>
        <div className={styles.price}>${filterOptions()?.price}</div>
      </div>
    </article>
  );
};

export default AppIngredientCard;
