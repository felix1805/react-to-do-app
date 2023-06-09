import { useState } from 'react';

const Modal = ({mode, setShowModal}) => {
  const editMode = mode === 'Edit'? true : false
  const [data, setData] = useState({
    user_email: '',
    title: '',
    progress: '',
    date: editMode ? '' : new Date()
  })


  const handleChange = (e) => {
    console.log('changing', e)
    const {name, value} = e.target

    setData(data => ({
      ...data,
      [name] : value
    }))
    console.log(data)
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} Your Task</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <form>
          <input
          required 
          maxLength={30}
          placeholder=" Your Task Goes Here"
          name="title"
          value={data.title}
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
          value={data.progress}
          onChange={handleChange}
          />
          <input className={mode} type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Modal;
