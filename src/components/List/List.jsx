import { useEffect, useState } from 'react';
import './List.scss'
import Task from './Task/Task';


const List = ({ infoAboutList, tasks }) => {
  const [editTitle, setEditTitle] = useState(false);
  const [title, setTitle] = useState(infoAboutList.title)
  const chengeEditMode = () => {
    setEditTitle(!editTitle)
  }
  console.log(infoAboutList, tasks);
  const chengeTitleText = (e) => {
    setTitle(e.target.value)
  }
  useEffect(() => {
    setTitle(infoAboutList.title);
  }, [infoAboutList.title])
  return (
    <div className='list'>
      <div className="list__title">
        {editTitle
          ? <input
            className="list__title_input"
            type="text"
            value={title}
            onChange={chengeTitleText}
            onBlur={chengeEditMode}
            autoFocus
          />
          : <div className="list__title_div" onDoubleClick={chengeEditMode}>{title}</div>
        }
      </div>
      {tasks.map(item => <Task {...item} />)}
    </div>
  )
}

export default List;