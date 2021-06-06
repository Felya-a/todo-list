import logo from './logo.svg';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { initializeAPPTC } from './redux/authReducer.js';
import { connect } from 'react-redux';
import Preloader from './components/Preloader/Preloader';
import Main from './components/Main/Main';
import { getListsTC } from './redux/todoListReducer.js';

function App(props) {
  useEffect(() => {
    props.initializeAPPTC();
    props.getListsTC();
  }, [])
  if (!props.initialized) return <Preloader />;
  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        <Route path='/login' render={() => <Login />} />
        <Main />
        <Footer />
      </div>
    </BrowserRouter >
  );
}

const mapStateToProps = (state) => ({
  initialized: state.auth.initialized,
})

export default connect(mapStateToProps, { initializeAPPTC, getListsTC })(App);
