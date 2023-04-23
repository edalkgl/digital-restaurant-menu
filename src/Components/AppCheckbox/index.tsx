import cn from 'classnames';
import styles from './index.module.scss';

import { useId } from 'react';

interface IProps {
  label: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppCheckbox: React.FC<IProps> = ({ label, className, onChange }) => {
  const htmlId = useId();

  return (
    <div className={cn(styles.container, className)}>
      <input
        type="checkbox"
        id={htmlId}
        className={styles.checkbox}
        onChange={onChange}
      />
      <label htmlFor={htmlId} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default AppCheckbox;
