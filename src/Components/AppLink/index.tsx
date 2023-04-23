import cn from 'classnames';
import styles from './index.module.scss';

import Link from 'next/link';

interface IProps {
  children?: React.ReactNode;
  href: string;
  className?: string | undefined;
}

const AppLink: React.FC<IProps> = ({ children, href, className }) => {
  return (
    <Link href={href} className={cn(styles.container, className)}>
      {children}
    </Link>
  );
};

export default AppLink;
