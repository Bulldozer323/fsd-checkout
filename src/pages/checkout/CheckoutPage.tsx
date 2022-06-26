import { AdvertBannerForMeta } from '~/features/advert-banner-for-meta';
import { Container, Link } from '~/shared/ui';

import styles from './CheckoutPage.module.css';

const CheckoutPage = () => {
  return (
    <Container>
      <div className={styles.banner}>
        <AdvertBannerForMeta id="checkout:top" />
      </div>

      <Link href="/checkout/complete">На комплит</Link>

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
      <p>
        Est voluptate enim consequatur officiis et totam aspernatur vero,
        quibusdam facilis fuga unde hic! Quia dolorem officia officiis eligendi
        impedit. A, quasi quo! Distinctio quisquam nostrum adipisci labore
        inventore dicta?
      </p>
      <p>
        Voluptatum adipisci quis facere cupiditate eaque quibusdam possimus,
        inventore aspernatur quae velit iste perspiciatis veritatis alias a! Ab
        commodi neque consequuntur itaque temporibus perspiciatis, nemo aperiam!
        Libero necessitatibus nihil quae.
      </p>
    </Container>
  );
};

export default CheckoutPage;
