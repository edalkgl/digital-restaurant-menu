import cn from 'classnames';
import styles from './index.module.scss';

import { useId } from 'react';

interface IProps {
  label?: string;
  placeholder?: string;
  className?: string;
  value: string;
  'aria-label'?: string | undefined;
  autoCapitalize?: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppSearch: React.FC<IProps> = ({
  label,
  placeholder,
  className,
  value,
  'aria-label': ariaLabel,
  autoCapitalize,
  onChange
}) => {
  const htmlId = useId();

  return (
    <div className={cn(styles.container, className)}>
      {label && (
        <label htmlFor={htmlId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type="search"
        id={htmlId}
        placeholder={placeholder}
        className={styles.search}
        value={value}
        aria-label={ariaLabel}
        autoCapitalize={autoCapitalize}
        onChange={onChange}
      />
    </div>
  );
};

export default AppSearch;
