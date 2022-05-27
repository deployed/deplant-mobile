import type {AppStackParamList} from '@core/navigation/AppStack/types';

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends AppStackParamList {}
  }
}
