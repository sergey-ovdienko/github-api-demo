import { store } from './Store.config';

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
