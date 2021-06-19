import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import MedicalRecordReducer from './medical-record/medical-record.reducer';
import CheckinReducer from './checkin/checkin.reducer';
import NavbarReducer from './navbar/navbar.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['medicalRecord', 'navbar', 'checkin']
}

const rootReducer = combineReducers({
  medicalRecord: MedicalRecordReducer,
  checkin: CheckinReducer,
  navbar: NavbarReducer
});

export default persistReducer(persistConfig, rootReducer)