import { Container } from '~/shared/ui';

import { Logo } from './Logo';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Logo />
      </Container>
    </header>
  );
};
