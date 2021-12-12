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

  const chengeCompleted = async () => {
    setLoadingTime(true)
    props.chengeComplitedStatusTC(props.listID, props.id, !completed, taskText)
  }

  const chengeEditMode = () => {
    // if (editMode && taskText != props.title) props.addTaskTC(props.idList, taskText)
    if (editMode && taskText != props.title) props.chengeTaskTextTC(props.listID, props.id, taskText)
    setEditMode(!editMode);
  }

  const chengeTaskText = (e) => {
    setTaskText(e.target.value);
  }
  return (
    <div className='task'>
      <div className="task__check-block">
        {loadingTime
          ? <img src={check0IMG} className='task__check-block_loading' alt="" />
          : completed
            ? <img onClick={chengeCompleted} src={check1IMG} alt="" />
            : <img onClick={chengeCompleted} src={cleanCircle} alt="" />
        }
      </div>
      <div onDoubleClick={chengeEditMode} className="task__text">
        {editMode
          ? <input
            className='task__text_input input'
            type="text"
            placeholder="Enter the task..."
            value={taskText}
            onChange={chengeTaskText}
            onBlur={chengeEditMode}
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