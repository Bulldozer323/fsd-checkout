import { createToken, Module, provide } from '@tramvai/core';

import type { Config } from './types';

const configMock = new Promise<Config>((resolve) =>
  setTimeout(() => {
    resolve({
      advertBanners: [
        {
          id: 'checkout:top',
          type: 'iframe',
          link: 'https://www.youtube.com/embed/QH2-TGUlwu4?start=4',
          width: 824,
          height: 400,
        },
        {
          id: 'complete:top',
          type: 'html',
          html: '<div style="display: flex; height: 100%; align-items: center; justify-content: center;"><span style="color: rgba(0,0,0,.8)">HTML-баннер</span></div>',
          width: 824,
          height: 400,
        },
      ],
    });
  }, 300)
);

export const CONFIG_API_SERVICE =
  createToken<ConfigApiService>('CONFIG_API_SERVICE');

class ConfigApiService {
  get() {
    return configMock;
  }
}

@Module({
  providers: [
    provide({
      provide: CONFIG_API_SERVICE,
      useClass: ConfigApiService,
    }),
  ],
})
export class ConfigApiModule {}
