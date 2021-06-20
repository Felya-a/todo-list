import { connect } from 'react-redux';
import { compose } from 'redux';
import { Modal } from '../../../hoc/Modal';
import './DeleteWarning.scss'
import { deleteListTC } from '../../../redux/todoListReducer'
import { useHistory, withRouter } from 'react-router';
import { useParams } from 'react-router-dom';


const DeleteWarning = (props) => {
  const { id } = useParams()
  const history = useHistory()

  const deleteList = async () => {
    const promise = await props.deleteListTC(id);
    if (promise) props.unmount();
  }

  const keyDownEnter = (e) => {
    if (e.code == "Enter") deleteList();
  }

  return (
    <div onKeyPress={keyDownEnter} className='delwar'>
      <h3 className="modal_title delwar__title">Delete List</h3>
      <div className='delwar__text'>Вы действительно хотите удалить список задач?</div>
      <button className='delwar__btn btn btn-yes' onClick={deleteList}>Да</button>
      <button className='delwar__btn btn btn-no' onClick={props.unmount}>Нет</button>
      {/* <button className='delwar__btn btn btn-no' onClick={() => history.push("")}>Нет</button> */}
    </div>
  )
}

export default compose(
  Modal,
  withRouter,
  connect(null, { deleteListTC })
)(DeleteWarning);