import './AddList.scss'
import * as cn from 'classnames';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createNewListTC } from '../../redux/todoListReducer';

const AddList = (props) => {

  const [isActive, setActive] = useState(false);
  const [value, setValue] = useState();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => setActive(true), 50);
  }, [])

  const unmount = () => {
    setActive(false)
    setTimeout(() => {
      history.push("")
    }, 500)
  }

  const chengeValue = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = async () => {
    if (!value) return; 
    const promise = await props.createNewListTC(value);
    if (promise) history.push("");
  }
  const keyDown = (...e) => {
    if (e[0].code == "Enter") onSubmit();
  }

  return (

    <div className={cn("add-list", { "active": isActive })} onClick={() => unmount()}>
      <div className={cn("add-list__content", { "active": isActive })} onClick={e => e.stopPropagation()}>
        <h3 className="add-list_title">Create List</h3>
        <div className="add-list_exit" onClick={() => unmount()}><img src="images/arrow-exit.svg" alt="X" /></div>
        <input onKeyPress={keyDown} onChange={chengeValue} value={value} className='add-list_input input' type="text" placeholder="Введите название" />
        <button onClick={onSubmit} className='add-list_btn btn'>Создать</button>
        {/* <button onKeyPress={(e) => { if (e.key == "Enter") onSubmit() }} onClick={onSubmit} className='add-list_btn btn'>Создать</button> */}
      </div>
    </div>
  )
}

export default connect(null, { createNewListTC })(AddList);