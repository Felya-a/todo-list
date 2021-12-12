import './AddList.scss'
import * as cn from 'classnames';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createNewListTC } from '../../redux/todoListReducer';
import arrowExit from "../../assets/images/arrow-exit.svg";
import { compose } from 'redux';
import { Modal } from '../../hoc/Modal';

const AddList = (props) => {

  const [value, setValue] = useState();
  const history = useHistory();


  const changeValue = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = async () => {
    if (!value) return;
    const promise = await props.createNewListTC(value);
    if (promise) props.unmount();
  }
  const keyDownEnter = (e) => {
    if (e.code == "Enter") onSubmit();
  }

  return (

    <div className='add-list'>
      <h3 className="modal_title">Create List</h3>
      <input autoFocus onKeyPress={keyDownEnter} onChange={changeValue} value={value} className='add-list_input input' type="text" placeholder="Введите название" />
      <button onClick={onSubmit} className='add-list_btn btn'>Create</button>
    </div>
  )
}

export default compose(
  Modal,
  connect(null, { createNewListTC }),
)(AddList);