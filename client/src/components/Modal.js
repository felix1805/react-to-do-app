import { useState } from 'react';

const Modal = () => {
  const mode = 'Create'
  const editMode = mode === 'Edit'? true : false
  const [data, setData] = useState({
    user_email: '',
    title: '',
    progress: '',
    date: editMode ? '' : new Date()
  })


  const handleChange = () => {
    console.log('changing')
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} Your Task</h3>
          <button>X</button>
        </div>
        <form>
          <input
          required
          maxLength={30}
          placeholder=" Your Task Goes Here"
          name="title"
          value={""}
          onChange={handleChange}
          />
          <br/>
          <label for="range">Drag To Select Your Current Progress</label>
          <input
          required
          type="range"
          id="range"
          min='0'
          max='100'
          name="progress"
          onChange={handleChange}
          />
          <input className={mode} type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Modal;
