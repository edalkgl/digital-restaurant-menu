import '../styles/app.scss';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Transparent Restaurant',
  viewport: 'width=device-width, initial-scale=1'
};

interface IProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
