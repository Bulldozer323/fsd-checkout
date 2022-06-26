import type { FC } from 'react';

import type { AdvertBanner as AdvertBannerType } from '~/shared/api';

import { AdvertBannerHtml } from '../advert-banner-html';
import { AdvertBannerIframe } from '../advert-banner-iframe';

export const AdvertBanner: FC<{ banner?: AdvertBannerType }> = ({ banner }) => {
  switch (banner?.type) {
    case 'iframe':
      return <AdvertBannerIframe banner={banner} />;

    case 'html':
      return <AdvertBannerHtml banner={banner} />;

    default:
      return null;
  }
};
