import './Modal.scss'
import * as cn from 'classnames'

const Modal = ({modalActive, setModalActive}) => {
  console.log("RENDER MODAL");
  return (
    <div className={cn("modal", {"active": modalActive})} onClick={setModalActive}>
      <div className={cn("modal__content", {"active": modalActive})} onClick={e => e.stopPropagation()}>
        <div className="modal__content-title">Login</div>
        <div className="modal__content-exit" onClick={setModalActive}><img src="images/arrow-exit.svg" alt="X" /></div>
        <div className="modal__content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laudantium iusto quia rem ut. Excepturi quam odio saepe ex voluptatum quas. Esse veniam saepe non doloremque fugiat maxime at nostrum nam nulla! Adipisci distinctio quam temporibus animi unde eaque quod molestias inventore porro veritatis hic doloremque totam quia, eius illo, officiis accusamus quaerat harum reiciendis veniam beatae sint molestiae repellendus.</div>
      </div>
    </div>
  )
}

export default Modal;