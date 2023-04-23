import cn from 'classnames';
import styles from './index.module.scss';

import React from 'react';

interface IProps {
  loader: boolean;
  children: React.ReactNode;
  className?: string | undefined;
  full?: boolean;
}

const AppLoader: React.FC<IProps> = ({ loader, className, full, children }) => {
  return (
    <div className={styles.container}>
      {loader ? (
        <div
          className={cn(styles.loaderContainer, className, {
            [styles.full]: full
          })}>
          <span className={styles.loader} />
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default AppLoader;
