import type { FC } from 'react';

import type { AdvertBannerHtml as AdvertBannerHtmlType } from '~/shared/api';

export const AdvertBannerHtml: FC<{ banner: AdvertBannerHtmlType }> = ({
  banner,
}) => {
  return (
    <div
      style={{
        width: banner.width,
        height: banner.height,
        backgroundColor: '#ffdd2d',
      }}
      // eslint-disable-next-line @typescript-eslint/naming-convention
      dangerouslySetInnerHTML={{ __html: banner.html }}
    />
  );
};
