import cn from 'classnames';

import { fontInter } from '@/src/Helpers/fontsHelper';

interface IProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={cn('app-layout', fontInter.className)}>{children}</div>
  );
};

export default AppLayout;
