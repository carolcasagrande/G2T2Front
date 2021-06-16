import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import MedicalRecordReducer from './medical-record/medical-record.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['activeMedicalRecord']
}

const rootReducer = combineReducers({
  medicalRecord: MedicalRecordReducer
});

export default persistReducer(persistConfig, rootReducer)