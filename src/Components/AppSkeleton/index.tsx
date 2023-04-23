import cn from 'classnames';
import styles from './index.module.scss';

interface IProps {
  height: number;
}

const AppSkeleton: React.FC<IProps> = ({ height }) => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.skeleton, styles[height])} />
    </div>
  );
};

export default AppSkeleton;
