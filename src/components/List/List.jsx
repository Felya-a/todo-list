import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { renameListTC, deleteListTC } from '../../redux/todoListReducer';
import './List.scss'
import Task from './Task/Task';


const List = ({ infoAboutList, tasks, renameListTC, deleteListTC }) => {
  const [editTitle, setEditTitle] = useState(false);
  const [title, setTitle] = useState(infoAboutList.title)
  const chengeEditMode = () => {
    if (editTitle && title != infoAboutList.title) renameListTC(infoAboutList.id, title);
    setEditTitle(!editTitle)
  }
  const chengeTitleText = (e) => {
    setTitle(e.target.value)
  }
  useEffect(() => {
    setTitle(infoAboutList.title);
  }, [infoAboutList.title])
  return (
    <div className='list'>
      <div className="list__title" onDoubleClick={chengeEditMode}>
        {editTitle
          // {true
          ? <input
            className="list__title_input input"
            type="text"
            value={title}
            onChange={chengeTitleText}
            onBlur={chengeEditMode}
            autoFocus
          />
          : <span className="list__title_span">{title}</span>
        }
        <div className="help-buttons">
          <span className='help-buttons__item info'><img src="images/info.svg" alt="" /></span>
          <span className='help-buttons__item delete' onClick={() => deleteListTC(infoAboutList.id)}><img src="images/delete.svg" alt="" /></span>
        </div>
      </div>
      {tasks.map((item, index) => <Task key={index} {...item} />)}
    </div>
  )
}

export default connect(null, { renameListTC, deleteListTC })(List);