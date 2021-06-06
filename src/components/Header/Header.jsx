import { NavLink, useHistory } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
  const history = useHistory();
  console.log(history);
  return (
    <div className="header">
      <div className="header__logo"></div>
      <div className="header__loginBlock" onClick={() => history.push("/login")}>
        <img src="images/user.svg" alt="User IMG" />
        {/* < a className="loginBlock__item" to={`/login`} >Sing in</a> */}
        < NavLink className="loginBlock__item" to={`/login`} >Sing in</NavLink>
        {/* {props.isAuth ?
          < NavLink className="loginBlock__item" to={`/login`} >{props.login.toUpperCase()}</NavLink> :
          < NavLink className="loginBlock__item" to={`/login`}>Sing in</NavLink>
        } */}
      </div>
    </div>
  )
}

{/* <button className='modalbtn' onClick={() => setModalActive(true)}>Модальное окно</button>
<Modal modalActive={modalActive} setModalActive={() => setModalActive(false)} />
 */}


export default Header