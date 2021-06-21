import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import MedicalRecordReducer from './medical-record/medical-record.reducer';
import CheckinReducer from './checkin/checkin.reducer';
import ServicesReducer from './services/services.reducer';
import ActiveReducer from './active/active.reducer';
import UserReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['medicalRecord', 'checkin', 'services', 'active', 'user']
}

const rootReducer = combineReducers({
  medicalRecord: MedicalRecordReducer,
  checkin: CheckinReducer,
  services: ServicesReducer,
  active: ActiveReducer,
  user: UserReducer
});

export default persistReducer(persistConfig, rootReducer)