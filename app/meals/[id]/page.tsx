import AppMealDetail from '@/src/Composite/AppMealDetail';
import AppHeader from '@/src/Composite/AppHeader';
import AppLayout from '@/src/Layouts';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Transparent Restaurant' };
}

export default async function MealPage() {
  return (
    <AppLayout>
      <AppHeader />
      <main>
        <Suspense>
          <AppMealDetail />
        </Suspense>
      </main>
    </AppLayout>
  );
}
