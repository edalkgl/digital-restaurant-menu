import AppImage from '@/src/Components/AppImage';
import styles from './index.module.scss';

interface IProps {
  title: string;
}

const AppHeadline: React.FC<IProps> = ({ title }) => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.title}>{title}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppHeadline;
