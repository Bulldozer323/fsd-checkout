import type { FC } from 'react';
import { useQuery } from '@tramvai/react-query';

import {
  AdvertBanner,
  advertBannerLib,
  advertBannerApi,
} from '~/entities/advert-banner';
import type { AdvertBannerId } from '~/shared/api';
import { configStore } from '~/shared/model';

const { useIsMetaSearch } = configStore;
const { getAdvertBannerById, checkAdvertBannerIsEnabled } = advertBannerLib;
const { getAdvertBannersQuery, getEnabledAdvertBannersQuery } = advertBannerApi;

export const AdvertBannerForMeta: FC<{ id: AdvertBannerId }> = ({ id }) => {
  const { data: banners } = useQuery(getAdvertBannersQuery);
  const { data: bannersEnabledMap } = useQuery(getEnabledAdvertBannersQuery);

  const isMetaSearch = useIsMetaSearch();
  const isEnabled = checkAdvertBannerIsEnabled(bannersEnabledMap, id);

  if (!isEnabled || !isMetaSearch) return null;

  const banner = getAdvertBannerById(banners, id);

  return <AdvertBanner banner={banner} />;
};
