import { useState } from 'react'
import { connect } from 'react-redux';
import './Main.scss'
import { createNewListTC } from '../../redux/todoListReducer'
import List from '../List/List';
import Preloader from '../Preloader/Preloader';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';


const Main = (props) => {
  const [value, setValue] = useState();
  const tasks = [{title: "task"},]
  const history = useHistory();
  const changeInput = (e) => {
    setValue(e.target.value)
  }

  const submit = () => {
    props.createNewListTC(value)
  }

  if (!props.isAuth) return null;
  if (Array.isArray(props.lists) && props.lists.length == 0) return <div className="preloader-wrapper"><Preloader/></div>; 
  return (
    <div className='main'>
      {/* <input type="text" onChange={changeInput} value={value} />
      <button onClick={submit}>Создать</button> */}
      {props.lists.map((item, index) => <List key={index} infoAboutList={item} tasks={tasks}/> )}
      <div className="addList"><NavLink to="/add-list"><img src="images/add.svg" alt="" /></NavLink></div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  lists: state.todo.lists,
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { createNewListTC })(Main);