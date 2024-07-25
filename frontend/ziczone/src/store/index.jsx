import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // 로컬 저장소를 사용
import alarmReducer from './reducers/alarmReducer';
import userReducer from './reducers/userReducer';

// persist 설정
const persistConfig = {
  key: 'root',
  storage,
};

// persistReducer로 감싸기
const persistedAlarmReducer = persistReducer(persistConfig, alarmReducer);
const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    alarm: persistedAlarmReducer,
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
    },
  }),
});

export const persistor = persistStore(store);
export default store;