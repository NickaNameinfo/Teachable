import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import loginSlice from "../Login/loginSlice";
import { api } from "../Services/courses";
import { studentapi } from "../Services/student";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [studentapi.reducerPath]: studentapi.reducer,
    loginState: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, studentapi.middleware),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Infer the type of the AppDispatch
export type AppDispatch = typeof store.dispatch;
