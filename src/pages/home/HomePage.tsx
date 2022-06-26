import { Container, Link } from '~/shared/ui';

import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <Container>
      <Link href="/checkout" className={styles.link}>
        На чекаут
      </Link>
    </Container>
  );
};

export default HomePage;
