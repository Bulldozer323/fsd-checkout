type AdvertBannerMeasure = number;

export type AdvertBannerId = 'checkout:top' | 'complete:top';

export type AdvertBannerIframe = {
  id: AdvertBannerId;
  type: 'iframe';
  link: string;
  width: AdvertBannerMeasure;
  height: AdvertBannerMeasure;
};

export type AdvertBannerHtml = {
  id: AdvertBannerId;
  type: 'html';
  html: string;
  width: AdvertBannerMeasure;
  height: AdvertBannerMeasure;
};

export type AdvertBanner = AdvertBannerIframe | AdvertBannerHtml;

export type AdvertBanners = AdvertBanner[];

export type Config = {
  advertBanners: AdvertBanners;
};

export type AdvertBannersEnabledMap = Record<AdvertBannerId, boolean>;

export type FeatureToggle = {
  advertBanners: AdvertBannersEnabledMap;
};
