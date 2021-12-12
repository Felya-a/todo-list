import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import './Main.scss'
import { createNewListTC } from '../../redux/todoListReducer'
import List from '../List/List';
import Preloader from '../Preloader/Preloader';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import AddIMG from '../../assets/images/add.svg';


const Main = (props) => {
  const [value, setValue] = useState();
  const history = useHistory();
  const changeInput = (e) => {
    setValue(e.target.value)
  }

  const submit = () => {
    props.createNewListTC(value)
  }

  return (
    <div className='main'>
      {/* <input type="text" onChange={changeInput} value={value} />
      <button onClick={submit}>Создать</button> */}
      {props.lists.map((item, index) => <List key={index} infoAboutList={item} tasks={item.tasks} />)}
      <div className="addList"><NavLink to="/add-list"><img src={AddIMG} alt="" title="Add TODO list" /></NavLink></div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  lists: state.todo.lists,
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { createNewListTC })(Main);