import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import clockReducer from '../features/slicers/time_slicer'; // Import the clock reducer
import loginReducer from '../features/slicers/loginslicer';
export const store = configureStore({
  reducer: {
    clock: clockReducer, 
    login: loginReducer,

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;