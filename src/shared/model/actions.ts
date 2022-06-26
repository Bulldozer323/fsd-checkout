import { createAction } from '@tramvai/core';
import { COOKIE_MANAGER_TOKEN } from '@tramvai/module-common';

import { configStore } from '.';

export const setMetaSearchValueToConfigStoreAction = createAction({
  name: 'setMetaSearchValueToConfigStoreAction',
  fn: (context, _: never, { cookieManager }) => {
    const isMetaSearch = !!cookieManager.get('__A_spp');
    context.dispatch(configStore.setState({ isMetaSearch }));
  },
  deps: {
    cookieManager: COOKIE_MANAGER_TOKEN,
  },
});
