import './Login.scss'
import * as cn from 'classnames'
import { useEffect, useState } from 'react'
import { Input } from '../common/FormsControls/FormsControls';
import { useHistory } from 'react-router'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux';
import { logoutTC, loginingTC } from '../../redux/authReducer'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='form'>
      <div className="form__input_email input">
        <Field
          type="text"
          placeholder="Email"
          component={Input}
          name='email'
        // validate={[required]} 
        />
      </div>
      <div className='form__input_password input'>
        <Field
          type="text"
          placeholder="Password"
          component={Input}
          name='password'
        // validate={[required]} 
        />
      </div>
      <div className='form__checkbox_rememberme'>
        <Field
          type="checkbox"
          component={Input}
          name='rememberMe'
          id='rememberMe' />
      </div>
      <label htmlFor="rememberMe" className='form__input_text'>
        Remember me
      </label>
      <button className='form__btnlogin btn'>Login</button>
    </form>
  )
}

const LoginReduxFrom = reduxForm({ form: "login" })(LoginForm)

const Login = (props) => {

  const [isActive, setActive] = useState(false)
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

  const logout = () => {
    props.logoutTC();
  }

  const onSubmit = async (formData) => {
    const promise = await props.loginingTC(formData);
    if (promise) history.push("");
  }

  return (

    <div className={cn("login", { "active": isActive })} onClick={() => unmount()}>
      <div className={cn("login__content", { "active": isActive })} onClick={e => e.stopPropagation()}>
        <h3 className="login__content-title">Sing In</h3>
        <div className="login__content-exit" onClick={() => unmount()}><img src="images/arrow-exit.svg" alt="X" /></div>
        {props.isAuth
          ? <button onClick={logout} className='login__logout-btn btn'>Logout</button>
          : <LoginReduxFrom onSubmit={onSubmit} />
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { loginingTC, logoutTC})(Login);
// export default compose(LoginHOC)(Login);