import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { reducer } from './reducers';

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
	devTools: process.env.nodeENV !== 'production',
});

const makeStore = () => store;

export const wrapper = createWrapper<AppStore>(makeStore);

export default store;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<R> = ThunkAction<R, AppState, unknown, AnyAction>;
