import { createBundle } from '@tramvai/core';
import { lazy } from '@tramvai/react';

export default createBundle({
  name: 'main',
  components: {
    home: lazy(() => import('./home/HomePage')),
    checkout: lazy(() => import('./checkout/CheckoutPage')),
    complete: lazy(() => import('./complete/CompletePage')),
  },
});
