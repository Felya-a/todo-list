import './Login.scss'
import * as cn from 'classnames'
import { useEffect, useState } from 'react'
import { Input } from '../common/FormsControls/FormsControls';
import { useHistory } from 'react-router'
import { compose } from 'redux'
import { LoginHOC } from '../../hoc/LoginHOC'
import { useMemo } from 'react'
import { reduxForm, Field } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='loginform'>
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
      <button>Login</button>
    </form>
  )
}

const LoginReduxFrom = reduxForm({ form: "login" })(LoginForm)

const Login = () => {
  console.log("RENDER LOGIN");
  const [isActive, setActive] = useState(false)
  const history = useHistory();
  useEffect(() => {
    console.log('useEffect');
    setActive(true)
    return function () {
      console.log('useEffect1');
      // setActive(false)
    }
  }, [])
  const unmount = () => {
    setActive(false)
    setTimeout(() => {
      history.push("")
    }, 500)
  }
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (

    <div className={cn("login", { "active": isActive })} onClick={() => unmount()}>
      <div className={cn("login__content", { "active": isActive })} onClick={e => e.stopPropagation()}>
        <div className="login__content-title">Login</div>
        <div className="login__content-exit" onClick={() => unmount()}><img src="images/arrow-exit.svg" alt="X" /></div>
        {/* <LoginReduxFrom onSubmit={onSubmit} /> */}
      </div>
    </div>
  )
}

export default Login;
// export default compose(LoginHOC)(Login);