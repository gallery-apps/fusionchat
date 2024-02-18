import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { userReducer } from "./features/state-slice";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  user: userReducer,
});

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const makeStore = () => {
  const isServer = typeof window === "undefined";
  if (isServer) return makeConfiguredStore();
  else {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const appStore = configureStore({
      reducer: persistedReducer,
      devTools: true,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    });
    return appStore;
  }
};
export const store = makeStore();
export const persistor = persistStore(store);
