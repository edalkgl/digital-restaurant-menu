import styles from './index.module.scss';

interface IProps {
  score: number;
}

const AppQuality: React.FC<IProps> = ({ score }) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{score}</div>
      <div className={styles.text}>quality</div>
    </div>
  );
};

export default AppQuality;
