import styles from './index.module.scss';

interface IProps {
  score: number;
}

const AppScore: React.FC<IProps> = ({ score }) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{score}</div>
      <div className={styles.text}>score</div>
    </div>
  );
};

export default AppScore;
