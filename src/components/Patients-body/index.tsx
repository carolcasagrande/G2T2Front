import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCheckinActive } from '../../redux/checkin/checkin.actions.js';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import './styles.css'

interface Props {
  checkin: any;
}

const PatientsBody: React.FC<Props> = ({ checkin }) => {
  const dispatch = useDispatch();
  const activeCheckin = useSelector((state: any) => state.checkin.activeCheckin)

  return(
    <div
      className={`row row-table ${activeCheckin?._id === checkin._id ? "active-checkin" : ""}`}
      onClick={() => dispatch(setCheckinActive(checkin))}
    >
      <div className="col-7">
        <div className='td'>{checkin.patient.slice(0,22)}{checkin.patient > 21 ? '...' : ""}</div>
      </div>
      <div className="col-5 time-info">
        <div className='td'> 15 min</div>
      </div>
    </div>
  )

};

export default PatientsBody;

