import { createReducer, createEvent, useStoreSelector } from '@tramvai/state';

type ConfigStore = {
  isMetaSearch: boolean;
};

const CONFIG_STORE_INITIAL_STATE: ConfigStore = {
  isMetaSearch: false,
};

export const setState = createEvent<Partial<ConfigStore>>(
  'setConfigStoreState'
);

export const Store = createReducer(
  'configStore',
  CONFIG_STORE_INITIAL_STATE
).on(setState, (state, partialState) => ({
  ...state,
  ...partialState,
}));

export const useIsMetaSearch = () => {
  return useStoreSelector(Store, (config) => config.isMetaSearch);
};
