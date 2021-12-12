import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect, useHistory } from 'react-router-dom'
import { renameListTC, createNewTaskTC, changeTaskTextTC, changeComplitedStatusTC, deleteTaskTC } from '../../redux/todoListReducer'
import DeleteWarning from './DeleteWarning/DeleteWarning'
import './List.scss'
import Task from './Task/Task'
import DeleteIMG from '../../assets/images/delete.svg'
import InfoIMG from '../../assets/images/info.svg'
import AddIMG from '../../assets/images/add.svg'



const List = ({ infoAboutList, tasks, renameListTC, createNewTaskTC, changeTaskTextTC, changeComplitedStatusTC, deleteTaskTC }) => {
  const [editTitle, setEditTitle] = useState(false)
  const [title, setTitle] = useState(infoAboutList.title)
  const history = useHistory()

  useEffect(() => {
    setTitle(infoAboutList.title)
  }, [infoAboutList.title])

  const changeEditMode = () => {
    if (editTitle && title != infoAboutList.title) renameListTC(infoAboutList.id, title)
    setEditTitle(!editTitle)
  }

  const changeTitleText = (e) => {
    setTitle(e.target.value)
  }

  const keyDownEnter = (e) => {
    if (e.code == "Enter") changeEditMode();
  }

  return (
    <div className='list'>
      <div className="list__title" onDoubleClick={changeEditMode}>
        {editTitle
          ? <input
            className="list__title_input input"
            type="text"
            value={title}
            onKeyPress={keyDownEnter}
            onChange={changeTitleText}
            onBlur={changeEditMode}
            autoFocus
          />
          : <span className="list__title_span">{title}</span>
        }
        <div className="help-buttons">
          <span className='help-buttons__item info'><img onClick={changeEditMode} src={InfoIMG} alt="" /></span>
          <span className='help-buttons__item delete'><img onClick={() => history.push(`/delete-warning/${infoAboutList.id}`)} src={DeleteIMG} alt="" /></span>
        </div>
      </div>
      <div className="list__tasks">
        {tasks.map((item, index) => <Task
          key={index}
          changeTaskTextTC={changeTaskTextTC}
          createNewTaskTC={createNewTaskTC}
          changeComplitedStatusTC={changeComplitedStatusTC}
          deleteTaskTC={deleteTaskTC}
          {...item}
        />)}
      </div>
      <div className="add-task">
        <img onClick={() => createNewTaskTC(infoAboutList.id)} src={AddIMG} alt="" title="Add task" />
      </div>
    </div>
  )
}

export default connect(null, { renameListTC, createNewTaskTC, changeTaskTextTC, changeComplitedStatusTC, deleteTaskTC })(List)