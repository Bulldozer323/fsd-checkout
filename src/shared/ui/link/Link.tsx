import { memo } from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from '@tramvai/module-router';

import { cn } from '~/shared/lib';

type LinkProps = {
  href: string;
  target?: string;
  replace?: boolean;
  onClick?: Function;
  className?: ClassName;
  query?: Record<string, string>;
  navigateOptions?: Record<string, any>;
} & Omit<JSX.IntrinsicElements['a'], 'className'>;

export const Link: FC<LinkProps> = memo(
  ({
    href,
    query,
    target,
    onClick,
    replace,
    children,
    className,
    navigateOptions,
    ...otherProps
  }) => {
    return (
      <RouterLink
        url={href}
        query={query}
        target={target}
        onClick={onClick}
        replace={replace}
        navigateOptions={navigateOptions}
      >
        <a href="replace" className={cn(className)} {...otherProps}>
          {children}
        </a>
      </RouterLink>
    );
  }
);
