import { createToken, Module, provide } from '@tramvai/core';

import type { FeatureToggle } from './types';

const featureToggleMock = new Promise<FeatureToggle>((resolve) =>
  setTimeout(() => {
    resolve({
      advertBanners: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'checkout:top': true,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'complete:top': true,
      },
    });
  }, 300)
);

export const FEATURE_TOGGLE_API_SERVICE = createToken<FeatureToggleApiService>(
  'FEATURE_TOGGLE_API_SERVICE'
);

class FeatureToggleApiService {
  get() {
    return featureToggleMock;
  }
}

@Module({
  providers: [
    provide({
      provide: FEATURE_TOGGLE_API_SERVICE,
      useClass: FeatureToggleApiService,
    }),
  ],
})
export class FeatureToggleApiModule {}
