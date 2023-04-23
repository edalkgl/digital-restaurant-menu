'use client';

import styles from './index.module.scss';

import AppSearch from '@/src/Components/AppSearch';
import AppRadio from '@/src/Components/AppRadio';
import { MealOption } from '@/src/Stores/type';
import { appStore } from '@/src/Stores';
import { observer } from 'mobx-react';
import { runInAction } from 'mobx';

const AppMealFilters = observer(() => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    runInAction(() => {
      appStore.mealSelectedValue = event.target.value;
    });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    runInAction(() => {
      appStore.mealSearchValue = event.target.value;
    });
  };

  return (
    <div className={styles.container}>
      <AppSearch
        value={appStore.mealSearchValue}
        placeholder="Search here..."
        autoCapitalize="none"
        onChange={handleSearchChange}
        className={styles.filterSearch}
      />
      <div className={styles.headTitle}>Filtering by Type</div>
      <div className={styles.filterList}>
        <AppRadio
          label="Name"
          value={MealOption.name}
          name="mealFilterOptions"
          onChange={handleChange}
          className={styles.item}
        />
        <AppRadio
          label="The newest"
          value={MealOption.new}
          name="mealFilterOptions"
          onChange={handleChange}
          className={styles.item}
        />
        <AppRadio
          label="The oldest"
          value={MealOption.old}
          name="mealFilterOptions"
          onChange={handleChange}
          className={styles.item}
        />
        <AppRadio
          label="Lowest price"
          value={MealOption.min}
          name="mealFilterOptions"
          onChange={handleChange}
          className={styles.item}
        />
        <AppRadio
          label="Highest price"
          value={MealOption.max}
          name="mealFilterOptions"
          onChange={handleChange}
          className={styles.item}
        />
      </div>
    </div>
  );
});

export default AppMealFilters;
