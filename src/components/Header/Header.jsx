import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header__logo">TODO-LIST</div>
      <div className="header__loginBlock" onClick={() => history.push("/login")}>
        <img src="images/user.svg" alt="User IMG" />
        < NavLink className="loginBlock__item" to={`/login`} >{props.login || "Sing in"}</NavLink>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
})

export default connect(mapStateToProps)(Header);