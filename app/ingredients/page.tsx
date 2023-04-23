import styles from './page.module.scss';

import AppIngredientFilters from '@/src/Composite/AppIngredientFilters';
import AppListIngredients from '@/src/Composite/AppListIngredients';
import AppHeadline from '@/src/Composite/AppHeadline';
import AppHeader from '@/src/Composite/AppHeader';
import type { Metadata } from 'next/types';
import AppLayout from '@/src/Layouts';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Ingredients - Transparent Restaurant'
};

export default async function IngredientsPage() {
  return (
    <AppLayout>
      <AppHeader />
      <main>
        <AppHeadline title={'Ingredients'} />
        <section className={styles.ingredientSection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.wrapper}>
                  <Suspense>
                    <AppIngredientFilters />
                  </Suspense>
                  <Suspense>
                    <AppListIngredients />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
