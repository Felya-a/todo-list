import './Login.scss'
import * as cn from 'classnames'
import { Input } from '../common/FormsControls/FormsControls';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux';
import { logoutTC, loginingTC } from '../../redux/authReducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Modal } from '../../hoc/Modal';

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
  const logout = () => {
    props.logoutTC();
    props.unmount();
  }

  const onSubmit = async (formData) => {
    const promise = await props.loginingTC(formData);
    if (promise) props.unmount();
  }

  return (
    <div className='login'>
      {props.isAuth
        ? <h3 className="modal_title">Quit</h3>
        : <h3 className="modal_title">Sing In</h3>
      }
      {props.isAuth
        ? <button onClick={logout} className='login__logout-btn btn'>Logout</button>
        : <LoginReduxFrom onSubmit={onSubmit} />
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default compose(
  Modal,
  withRouter,
  connect(mapStateToProps, { loginingTC, logoutTC }),
)(Login);
// export default compose(LoginHOC)(Login);