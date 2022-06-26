import { AdvertBannerForMeta } from '~/features/advert-banner-for-meta';
import { Container } from '~/shared/ui';

import styles from './CompletePage.module.css';

const CompletePage = () => {
  return (
    <Container>
      <div className={styles.banner}>
        <AdvertBannerForMeta id="complete:top" />
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid
        ratione suscipit nesciunt omnis! Aliquam accusamus tempore cumque illo
        pariatur iste, nesciunt maiores fuga, eum hic porro sit laborum
        veritatis!
      </p>
      <p>
        Rem distinctio dolorum sint ratione error consequuntur libero
        perferendis fugit tenetur consectetur. Facere minus, saepe voluptate
        rerum quasi reiciendis quae obcaecati corporis quia voluptatum maiores
        porro, et sit veniam soluta.
      </p>
      <p>
        Est non magnam corporis quo quia id quas quasi similique, reprehenderit
        consequatur necessitatibus libero fuga accusamus ut velit iusto, aliquid
        eligendi odit. Animi libero dolorum dolor recusandae dicta repellat
        incidunt.
      </p>
    </Container>
  );
};

export default CompletePage;
