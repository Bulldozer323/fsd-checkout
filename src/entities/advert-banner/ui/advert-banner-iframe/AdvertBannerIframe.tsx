import type { FC } from 'react';

import type { AdvertBannerIframe as AdvertBannerIframeType } from '~/shared/api';

export const AdvertBannerIframe: FC<{ banner: AdvertBannerIframeType }> = ({
  banner,
}) => {
  return (
    <iframe
      frameBorder={0}
      src={banner.link}
      width={banner.width}
      height={banner.height}
      style={{ display: 'block' }}
      title={`advert:banner:${banner.id}`}
    />
  );
};
