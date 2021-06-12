import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import * as cn from 'classnames';
import './Modal.scss';
import arrowExit from "../assets/images/arrow-exit.svg";


let mapStateToProps = (state) => ({
})

// hoc это добавление компоненте дополнительных опций, за счет еще одного оборачивания в контейнерную компоненту
export const Modal = (Component) => {
  const ModalComponent = (props) => {

    const [isActive, setActive] = useState(false);
    const history = useHistory();

    useEffect(() => {
      setTimeout(() => setActive(true), 50);
    }, [])
    const unmount = () => {
      setActive(false)
      setTimeout(() => {
        history.push("");
      }, 500)
    }

    return (
      <div className={cn("modal", { "active": isActive })} onClick={() => unmount()}>
        <div className={cn("modal__content", { "active": isActive })} onClick={e => e.stopPropagation()}>
            <div className="modal_exit" onClick={() => unmount()}><img src={arrowExit} alt="X" /></div>
          < Component {...props} unmount={unmount} />
        </div>
      </div>
    )
  }

  // <h3 className="modal_title">Create List</h3>

  let ConnectedAuthRedirectComponent = connect(mapStateToProps)(ModalComponent);

  return ConnectedAuthRedirectComponent;
}