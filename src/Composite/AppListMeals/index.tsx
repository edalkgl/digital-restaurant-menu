'use client';

import styles from './index.module.scss';

import AppMealCard from '@/src/Composite/AppMealCard';
import { MealOption } from '@/src/Stores/type';
import { useEffect, useMemo } from 'react';
import { appStore } from '@/src/Stores';
import { observer } from 'mobx-react';

const AppListMeals = observer(() => {
  useEffect(() => {
    appStore.fillListMeals();
  }, []);

  const filterListMeals = useMemo(() => {
    if (!appStore.listMeals) {
      return [];
    }
    const searchValue = appStore.mealSearchValue.toLocaleLowerCase();
    let filteredMeals = appStore.listMeals.filter((meal) => {
      const name = meal?.name?.toLocaleLowerCase();
      return name?.includes(searchValue);
    });

    if (appStore.mealSelectedValue === MealOption.new) {
      filteredMeals = filteredMeals.sort((a, b) => b.id - a.id);
    } else if (appStore.mealSelectedValue === MealOption.name) {
      filteredMeals = filteredMeals.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (appStore.mealSelectedValue === MealOption.max) {
      filteredMeals = filteredMeals.sort((a, b) => {
        const maxQuantityA = Math.max(
          ...a.ingredients.map((ingredient) => ingredient.quantity)
        );
        const maxQuantityB = Math.max(
          ...b.ingredients.map((ingredient) => ingredient.quantity)
        );
        return maxQuantityB - maxQuantityA;
      });
    }

    return filteredMeals;
  }, [
    appStore.listMeals,
    appStore.mealSelectedValue,
    appStore.mealSearchValue
  ]);

  return (
    <div className={styles.container}>
      {filterListMeals.length ? (
        <div className={styles.list}>
          {filterListMeals?.map((item) => (
            <AppMealCard
              name={item?.name}
              id={item?.id}
              ingredients={item?.ingredients}
              key={item?.id}
            />
          ))}
        </div>
      ) : (
        <div className={styles.notFound}>Data not found</div>
      )}
    </div>
  );
});

export default AppListMeals;
