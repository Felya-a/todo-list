import { useState } from 'react'
import { connect } from 'react-redux';
import './Main.scss'
import { createNewListTC } from '../../redux/todoListReducer'


const Main = (props) => {
  const [value, setValue] = useState();

  const changeInput = (e) => {
    setValue(e.target.value)
  }

  const submit = () => {
    props.createNewListTC(value)
  }
  return (
    <div className='main'>
      <input type="text" onChange={changeInput} value={value} />
      <button onClick={submit}>Создать</button>
      <div>{props.lists.map(item => <div>{item.title}</div> )}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  lists: state.todo.lists,
})

export default connect(mapStateToProps, { createNewListTC })(Main);