import cn from 'classnames';
import styles from './index.module.scss';

import { useId } from 'react';

interface IProps {
  label: string;
  name?: string;
  checked?: boolean;
  className?: string;
  'data-type'?: string;
  value?: string | ReadonlyArray<string> | number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppRadio: React.FC<IProps> = ({
  label,
  name,
  value,
  checked,
  className,
  'data-type': dataType,
  onChange
}) => {
  const htmlId = useId();

  return (
    <div className={cn(styles.container, className)}>
      <input
        type="radio"
        id={htmlId}
        name={name}
        value={value}
        checked={checked}
        data-type={dataType}
        className={styles.radio}
        onChange={onChange}
      />
      <label htmlFor={htmlId} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default AppRadio;
