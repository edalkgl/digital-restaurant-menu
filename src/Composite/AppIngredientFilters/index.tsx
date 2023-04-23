'use client';

import styles from './index.module.scss';

import { IngredientOption } from '@/src/Stores/type';
import AppSearch from '@/src/Components/AppSearch';
import AppRadio from '@/src/Components/AppRadio';
import { appStore } from '@/src/Stores';
import { observer } from 'mobx-react';
import { runInAction } from 'mobx';

const AppIngredientFilters = observer(() => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    runInAction(() => {
      appStore.ingredientSearchValue = event.target.value;
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    runInAction(() => {
      appStore.ingredientSelectedValue = event.target.value;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterHead}>
        <div className={styles.headTitle}>Filtering by Type</div>
        <div className={styles.filterList}>
          <AppRadio
            label="All"
            value={IngredientOption.all}
            name="ingredientFilterOptions"
            onChange={handleChange}
            className={styles.item}
          />
          <AppRadio
            label="Vegan"
            value={IngredientOption.vegan}
            name="ingredientFilterOptions"
            onChange={handleChange}
            className={styles.item}
          />
          <AppRadio
            label="Vegetarian"
            value={IngredientOption.vegetarian}
            name="ingredientFilterOptions"
            onChange={handleChange}
            className={styles.item}
          />
        </div>
      </div>
      <AppSearch
        value={appStore.ingredientSearchValue}
        placeholder="Search here..."
        onChange={handleSearchChange}
        autoCapitalize="none"
        className={styles.filterSearch}
      />
    </div>
  );
});

export default AppIngredientFilters;
