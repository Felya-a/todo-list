import { useEffect, useState } from 'react';
import './Task.scss';
import cleanCircle from '../../../assets/images/dry-clean.svg';
import check1IMG from '../../../assets/images/check1.svg';
import check0IMG from '../../../assets/images/check0.svg';
import DeleteIMG from '../../../assets/images/delete.svg';
import * as cn from 'classnames';



const Task = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [taskText, setTaskText] = useState();
  const [loadingTime, setLoadingTime] = useState(false)
  
  useEffect(() => {
    if (props.title) setTaskText(props.title);
  }, [props.title])

  useEffect(() => {
    setLoadingTime(false)
    setCompleted(Boolean(props.completed));
  }, [props.completed])

  const deleteTask = () => {
    props.deleteTaskTC(props.listID, props.id)
  }

  const changeCompleted = async () => {
    setLoadingTime(true)
    props.changeComplitedStatusTC(props.listID, props.id, !completed, taskText)
  }

  const changeEditMode = () => {
    // if (editMode && taskText != props.title) props.addTaskTC(props.idList, taskText)
    if (editMode && taskText != props.title) props.changeTaskTextTC(props.listID, props.id, taskText, props.completed)
    setEditMode(!editMode);
  }

  const changeTaskText = (e) => {
    setTaskText(e.target.value);
  }

  const keyDownEnter = (e) => {
    if (e.code == "Enter") changeEditMode();
  }

  return (
    <div className='task'>
      <div className="task__check-block">
        {loadingTime
          ? <img src={check0IMG} className='task__check-block_loading' alt="" />
          : completed
            ? <img onClick={changeCompleted} src={check1IMG} alt="" />
            : <img onClick={changeCompleted} src={cleanCircle} alt="" />
        }
      </div>
      <div onClick={changeEditMode} className="task__text">
        {editMode
          ? <input
            className='task__text_input input'
            type="text"
            placeholder="Enter task..."
            onKeyPress={keyDownEnter}
            value={taskText}
            onChange={changeTaskText}
            onBlur={changeEditMode}
            autoFocus
            maxLength="100"
          />
          : <span className={cn("task__text_span", {"done": completed})}>{props.title}</span>
        }
        <div className="help-buttons">
          <span className='help-buttons__item delete'><img onClick={deleteTask} src={DeleteIMG} alt="" /></span>
        </div>
      </div>
    </div>
  )
}

export default Task;