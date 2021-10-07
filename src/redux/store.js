// import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
// import {
//   // persistReducer,
//   // persistStore,
//   PAUSE,
//   REHYDRATE,
//   PERSIST,
//   PURGE,
//   FLUSH,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import contactsReducer from "./contacts/contacts-reducer";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

// const persistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

const rootReducer = combineReducers({
  //contacts: persistReducer(persistConfig, contactsReducer), //персистим contactsReducer чтобы изолироваться от фильтра в localeStorage
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

export { store };
