'use client';

import cn from 'classnames';
import styles from './index.module.scss';

import { PageLink, Base } from '@/src/Constants/base';
import AppLink from '@/src/Components/AppLink';
import { usePathname } from 'next/navigation';

const AppHeader = () => {
  const pathname = usePathname();

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <AppLink href={PageLink.Home}>{Base.Title}</AppLink>
        </div>
        <div className={styles.menuList}>
          <div
            className={cn(styles.item, {
              [styles.active]: pathname === PageLink.Meals
            })}>
            <AppLink href={PageLink.Meals}>Meals</AppLink>
          </div>
          <div
            className={cn(styles.item, {
              [styles.active]: pathname === PageLink.Ingredients
            })}>
            <AppLink href={PageLink.Ingredients}>Ingredients</AppLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
