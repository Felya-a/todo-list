import { useState } from 'react';
import './Task.scss'


const Task = (props) => {
  const [editMode, setEditMode] = useState(false)
  return (
    <div className='task'>
      {editMode
        ? <input className='input' type="text" placeholder="Enter the task..." />
        : <div>{props.title}</div>
      }
    </div>
  )
}

export default Task;