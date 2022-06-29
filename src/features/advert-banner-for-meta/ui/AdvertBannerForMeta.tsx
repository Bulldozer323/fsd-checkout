import type { FC } from 'react';
import { useQuery } from '@tramvai/react-query';

import {
  AdvertBanner,
  advertBannerLib,
  advertBannerApi,
} from '~/entities/advert-banner';
import type { AdvertBannerId } from '~/shared/api';
import { configStore } from '~/shared/model';

export const AdvertBannerForMeta: FC<{ id: AdvertBannerId }> = ({ id }) => {
  const { data: banners } = useQuery(advertBannerApi.getAdvertBannersQuery);
  const { data: bannersEnabledMap } = useQuery(
    advertBannerApi.getEnabledAdvertBannersQuery
  );

  const isMetaSearch = configStore.useIsMetaSearch();
  const isEnabled = advertBannerLib.checkAdvertBannerIsEnabled(
    bannersEnabledMap,
    id
  );

  if (!isEnabled || !isMetaSearch) return null;

  const banner = advertBannerLib.getAdvertBannerById(banners, id);

  return <AdvertBanner banner={banner} />;
};
