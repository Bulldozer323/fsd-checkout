import type { FC, ReactElement } from 'react';

import { cn } from '~/shared/lib';

import styles from './Container.module.css';

type ContainerProps = {
  className?: string;
  children: ReactElement | Array<ReactElement>;
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn(styles.root, className)}>{children}</div>;
};
