import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import MedicalRecordReducer from './medical-record/medical-record.reducer';
import CheckinReducer from './checkin/checkin.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['activeMedicalRecord', 'activeCheckin']
}

const rootReducer = combineReducers({
  medicalRecord: MedicalRecordReducer,
  checkin: CheckinReducer
});

export default persistReducer(persistConfig, rootReducer)