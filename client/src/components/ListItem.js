import ProgressBar from './ProgressBar';
import TickIcon from './TickIcon';
import { useState } from 'react';
import Modal from './Modal';

const ListItem = ({task, getData}) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon/>
      <p className="task-title">{task.title}</p>
      <ProgressBar/>
      </div>
      <div className='button-container'>
        <button className='Edit' onClick={() => setShowModal(true)}>EDIT</button>
        <button className='delete'>DELETE</button>
      </div>
      {showModal && <Modal mode={'Edit'} setShowModal={setShowModal} getData={getData} task={task}/>}
    </li>
  );
}

export default ListItem;
