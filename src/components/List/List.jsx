import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { renameListTC } from '../../redux/todoListReducer';
import DeleteWarning from './DeleteWarning/DeleteWarning';
import './List.scss'
import Task from './Task/Task';
import DeleteIMG from '../../assets/images/delete.svg';
import InfoIMG from '../../assets/images/info.svg';



const List = ({ infoAboutList, tasks, renameListTC }) => {
  const [editTitle, setEditTitle] = useState(false);
  const [title, setTitle] = useState(infoAboutList.title)
  const history = useHistory();
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
          <span className='help-buttons__item info'><img src={InfoIMG} alt="" /></span>
          <span className='help-buttons__item delete'><img onClick={() => history.push(`/delete-warning/${infoAboutList.id}`)} src={DeleteIMG} alt="" /></span> 
        </div>
      </div>
      {tasks.map((item, index) => <Task key={index} {...item} />)}
    </div>
  )
}

export default connect(null, { renameListTC })(List);