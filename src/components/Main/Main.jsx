import { useState } from 'react'
import { connect } from 'react-redux';
import './Main.scss'
import { createNewListTC } from '../../redux/todoListReducer'
import List from '../List/List';


const Main = (props) => {
  const [value, setValue] = useState();
  const tasks = [{title: "task"},]
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
      {props.lists.map((item, index) => <List key={index} infoAboutList={item} tasks={tasks}/> )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  lists: state.todo.lists,
})

export default connect(mapStateToProps, { createNewListTC })(Main);