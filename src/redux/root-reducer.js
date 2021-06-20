import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import MedicalRecordReducer from './medical-record/medical-record.reducer';
import CheckinReducer from './checkin/checkin.reducer';
import NavbarReducer from './navbar/navbar.reducer';
import ServicesReducer from './services/services.reducer';
import ActiveReducer from './active/active.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['medicalRecord', 'navbar', 'checkin', 'services', 'active']
}

const rootReducer = combineReducers({
  medicalRecord: MedicalRecordReducer,
  checkin: CheckinReducer,
  navbar: NavbarReducer,
  services: ServicesReducer,
  active: ActiveReducer
});

export default persistReducer(persistConfig, rootReducer)