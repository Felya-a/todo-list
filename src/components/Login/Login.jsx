import './Login.scss'
import * as cn from 'classnames'
import { Input } from '../common/FormsControls/FormsControls';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux';
import { logoutTC, loginingTC } from '../../redux/authReducer'
import { compose } from 'redux';
import { Modal } from '../../hoc/Modal';
import { required } from '../../utils/validators/validators';
import React, { useState } from 'react';
import { useEffect } from 'react';

const LoginForm = (props) => {
  const [error, setError] = useState(null)
  useEffect(() => {
    if (props.error) setError(props.error);
  }, [props.error])
  if (error == "Incorrect anti-bot symbols") alert("Пройдите капчу на сайте https://social-network.samuraijs.com/")

  return (
    <form onSubmit={props.handleSubmit} className="form">
      <div className="form__input_email input">
        <Field
          type="text"
          placeholder="Email"
          component={Input}
          name='email'
          validate={[required]}
        />
      </div>
      <div className='form__input_password input'>
        <Field
          type="text"
          placeholder="Password"
          component={Input}
          name='password'
          validate={[required]}
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
      <div className="error">
        {props.error &&
          <div className="error__message">
            <div>{props.error}</div>
          </div>
        }
      </div>
      <button className='form__btnlogin btn'>Login</button>
    </form>
  )
}

const LoginReduxFrom = reduxForm({ form: "login" })(LoginForm)


const Login = (props) => {
  const logout = () => {
    props.logoutTC();
    props.unmount();
  }

  const onSubmit = (formData) => {
    // const promise = await props.loginingTC(formData);
    // if (promise) props.unmount();
    props.loginingTC(formData)
  }
  return (
    <div className='login'>
      {props.isAuth
        ? <h3 className="modal_title">Quit</h3>
        : <h3 className="modal_title">Sing In</h3>
      }
      {props.isAuth
        ? <button onClick={logout} className='login__logout-btn btn'>Logout</button>
        : <LoginReduxFrom onSubmit={onSubmit} initialValues={{ email: 'free@samuraijs.com', password: 'free' }} />
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default compose(
  Modal,
  connect(mapStateToProps, { loginingTC, logoutTC }),
)(Login);