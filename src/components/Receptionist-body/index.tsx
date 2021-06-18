import React, { useEffect, useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';

//import { setCheckinActive } from '../../redux/checkin/checkin.actions.js';

//import EditIcon from '@material-ui/icons/Edit';
//import DeleteIcon from '@material-ui/icons/Delete';
import api from '../../service/api';

import './styles.css'

interface ISchedule {
  client: string;
  date_schedule: string;
  date_service: string;
  specialist: string;
  status_service: string;
  time_service: string;
} 

/* client: {id: 2, cpf: "111.155.767-22", name: "Bruce Wayne", phone: "(51)3244-7171", mobile: "(51)98777-8511", …}
client_id: 2
createdAt: "2021-06-17T17:55:14.467Z"
date_schedule: "2021-06-17T17:55:14.466Z"
date_service: "2021-06-17T17:55:14.467Z"
id: 1
price: 150
specialist: {id: 3, register: "212107", name: "Machado de Assis", phone: "(47)3242-0028", mobile: "(47)98789-0118", …}
specialist_id: 3
status_service: "AGENDADO"
time_service: "2021-06-17T17:55:14.467Z" */

interface Props {
  schedule: any;
}

const ReceptionistBody: React.FC = () => {
  const [schedules, setSchedules] = useState<Array<any>>([])
  //const dispatch = useDispatch();
  //const activeCheckin = useSelector((state: any) => state.checkin.activeCheckin)

  

  console.log('teste', schedules)

  return(
    <div>
    {
      schedules.map(schedule => (
        <p>{schedule}</p>
      ))
    }
    </div>

    /* <div
      className={`row row-table ${activeCheckin?._id === schedule._id ? "active-checkin" : ""}`}
      onClick={() => dispatch(setCheckinActive(schedule))}
    >
      <div className="col-7">
        <div className='td'>{schedule.patient.slice(0,22)}{schedule.patient > 21 ? '...' : ""}</div>
      </div>
      <div className="col-5 time-info">
        <div className='td'> 15 min</div>
        <div className="icons">
          <span aria-label="Delete">
            <EditIcon className='icon' style={{ width: '20px' }} />
          </span>
          <span aria-label="Edit">
            <DeleteIcon className='icon' style={{ width: '20px' }} />
          </span>
        </div>
      </div>
    </div> */
  )

};

export default ReceptionistBody;

