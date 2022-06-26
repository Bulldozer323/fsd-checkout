import { createQuery } from '@tramvai/react-query';

import { configApi } from '~/shared/api';
import { featureToggleApi } from '~/shared/api';

const { CONFIG_API_SERVICE } = configApi;
const { FEATURE_TOGGLE_API_SERVICE } = featureToggleApi;

export const getAdvertBannersQuery = createQuery({
  key: 'getAdvertBannersQuery',
  fn: async (_: never, { configApiService }) => {
    const { advertBanners } = await configApiService.get();
    return advertBanners;
  },
  deps: {
    configApiService: CONFIG_API_SERVICE,
  },
});

export const getEnabledAdvertBannersQuery = createQuery({
  key: 'getEnabledAdvertBannersQuery',
  fn: async (_: never, { featureToggleApiService }) => {
    const { advertBanners } = await featureToggleApiService.get();
    return advertBanners;
  },
  deps: {
    featureToggleApiService: FEATURE_TOGGLE_API_SERVICE,
  },
});
