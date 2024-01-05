import {persistStore} from 'redux-persist';
import configureAppStore from './store';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';

export const store = configureAppStore();
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
