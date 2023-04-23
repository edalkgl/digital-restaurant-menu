import styles from './page.module.scss';

import AppMealFilters from '@/src/Composite/AppMealFilters';
import AppListMeals from '@/src/Composite/AppListMeals';
import AppHeadline from '@/src/Composite/AppHeadline';
import AppHeader from '@/src/Composite/AppHeader';
import type { Metadata } from 'next/types';
import AppLayout from '@/src/Layouts';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Meals - Transparent Restaurant'
};

export default async function MealsPage() {
  return (
    <AppLayout>
      <AppHeader />
      <main>
        <AppHeadline title={'Find the best Meals'} />
        <section className={styles.mealSection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.wrapper}>
                  <Suspense>
                    <AppMealFilters />
                  </Suspense>
                  <Suspense>
                    <AppListMeals />
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
