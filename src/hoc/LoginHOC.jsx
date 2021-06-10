import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

let mapStateToProps = (state) => ({
})

// hoc это добавление компоненте дополнительных опций, за счет еще одного оборачивания в контейнерную компоненту
export const Modal = (Component) => {
  class RedirectComponent extends React.Component {
    state = {
      isActive: false
    }
    componentWillMount() {
      this.setState({isActive: true})
      console.log('CWM');
    }
    componentWillUnmount() {
      this.setState({isActive: false})
    }
    render() {
      return <Component {...this.props} isActive={true}/>
    }
  }


  let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectedAuthRedirectComponent;
}