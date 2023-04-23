import cn from 'classnames';
import styles from './index.module.scss';

interface IProps {
  children: React.ReactNode;
  color?: 'dark' | 'gray' | 'white';
  className?: string | undefined;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AppButton: React.FC<IProps> = ({
  children,
  className,
  color,
  fullWidth,
  onClick
}) => {
  return (
    <button
      className={cn(styles.container, className, styles[`bt-${color}`], {
        [styles.fullWidth]: fullWidth
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default AppButton;
