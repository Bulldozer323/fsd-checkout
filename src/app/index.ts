import { createApp } from '@tramvai/core';
import { COMBINE_REDUCERS, CommonModule } from '@tramvai/module-common';
import { SpaRouterModule } from '@tramvai/module-router';
import { RenderModule } from '@tramvai/module-render';
import { ServerModule } from '@tramvai/module-server';
import { ErrorInterceptorModule } from '@tramvai/module-error-interceptor';
import { SeoModule } from '@tramvai/module-seo';
import { ReactQueryModule } from '@tramvai/module-react-query';
import {
  RENDER_SLOTS,
  ResourceType,
  ResourceSlot,
} from '@tramvai/tokens-render';

import { HeaderModule } from '~/widgets/header';
import { actions, configStore } from '~/shared/model';
import { configApi, featureToggleApi } from '~/shared/api';
import { advertBannerApi } from '~/entities/advert-banner';

import './index.module.css';

export const App = createApp({
  name: 'checkout-fsd',
  modules: [
    CommonModule,
    SpaRouterModule.forRoot([
      {
        name: 'home',
        path: '/',
        config: {
          bundle: 'main',
          pageComponent: 'home',
        },
      },
      {
        name: 'checkout',
        path: '/checkout',
        config: {
          bundle: 'main',
          pageComponent: 'checkout',
        },
      },
      {
        name: 'complete',
        path: '/checkout/complete',
        config: {
          bundle: 'main',
          pageComponent: 'complete',
        },
      },
    ]),
    RenderModule.forRoot({ useStrictMode: true }),
    SeoModule,
    ServerModule,
    ErrorInterceptorModule,
    HeaderModule,
    ReactQueryModule,
    configApi.ConfigApiModule,
    featureToggleApi.FeatureToggleApiModule,
  ],
  bundles: {
    main: () => import(/* webpackChunkName: "main" */ '../pages'),
  },
  providers: [
    {
      provide: RENDER_SLOTS,
      multi: true,
      useValue: {
        type: ResourceType.asIs,
        slot: ResourceSlot.HEAD_META,
        payload:
          '<meta name="viewport" content="width=device-width, initial-scale=1">',
      },
    },
    {
      provide: COMBINE_REDUCERS,
      multi: true,
      useValue: [configStore.Store],
    },
  ],
  actions: [
    actions.setMetaSearchValueToConfigStoreAction,
    advertBannerApi.getAdvertBannersQuery.prefetchAction(),
    advertBannerApi.getEnabledAdvertBannersQuery.prefetchAction(),
  ],
});
