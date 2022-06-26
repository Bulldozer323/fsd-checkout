import type {
  AdvertBannerId,
  AdvertBanners,
  AdvertBannersEnabledMap,
} from '~/shared/api';

export const getAdvertBannerById = (
  banners: AdvertBanners = [],
  id: AdvertBannerId
) => banners.find((banner) => banner.id === id);

export const checkAdvertBannerIsEnabled = (
  bannersEnabledMap: AdvertBannersEnabledMap = {} as AdvertBannersEnabledMap,
  id: AdvertBannerId
) => !!bannersEnabledMap[id];
