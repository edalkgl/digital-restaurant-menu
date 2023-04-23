import styles from './index.module.scss';

interface IProps {
  price: number;
}

const AppPrice: React.FC<IProps> = ({ price }) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>${price}</div>
      <div className={styles.text}>price</div>
    </div>
  );
};

export default AppPrice;
