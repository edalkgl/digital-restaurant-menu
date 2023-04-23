'use client';

import styles from './index.module.scss';

import { dynamicString, stringToSlug } from '@/src/Helpers/stringHelper';
import { mealImageUri } from '@/src/Helpers/imageHelper';
import React, { Key, useEffect, useState } from 'react';
import AppButton from '@/src/Components/AppButton';
import { TMealQuantity } from '@/src/Stores/type';
import AppImage from '@/src/Components/AppImage';
import { PageLink } from '@/src/Constants/base';
import AppLink from '@/src/Components/AppLink';
import { maxBy, minBy } from 'lodash';

interface IProps {
  id: number;
  name: string;
  ingredients: Array<{
    name: string;
    quantity: number;
    quantity_type: TMealQuantity;
  }>;
}

const AppMealCard: React.FC<IProps> = ({ id, name, ingredients }) => {
  const [minMaxQuantity, setMinMaxQuantity] = useState<{
    Min: number | null;
    Max: number | null;
  }>({
    Min: null,
    Max: null
  });

  const findMinMaxQuantity = (ingredients: any) => {
    const min: any = minBy(ingredients, 'quantity');
    const max: any = maxBy(ingredients, 'quantity');

    setMinMaxQuantity({
      Min: min?.quantity,
      Max: max?.quantity
    });
  };

  useEffect(() => {
    findMinMaxQuantity(ingredients);
  }, [ingredients]);

  return (
    <article className={styles.container}>
      <picture className={styles.picture}>
        <AppImage
          src={mealImageUri(stringToSlug(name))}
          alt={name}
          width={350}
          height={150}
          unoptimized
          priority
        />
      </picture>

      <h2 className={styles.title}>{name}</h2>
      <div className={styles.price}>
        ${minMaxQuantity.Min} - ${minMaxQuantity.Max}
      </div>

      <div className={styles.ingredients}>
        {ingredients?.map((item, index: Key) => (
          <div className={styles.item} key={index}>
            {item?.name}
          </div>
        ))}
      </div>

      <AppLink href={dynamicString(PageLink.Meal, String(id))}>
        <AppButton fullWidth>Details</AppButton>
      </AppLink>
    </article>
  );
};

export default AppMealCard;
