import logo from './logo.svg';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import Preloader from './components/Preloader/Preloader';
import Main from './components/Main/Main';
import { initializeAppTC } from './redux/initializeReducer';
import AddList from './components/AddList/AddList';

function App(props) {
  useEffect(() => {
    props.initializeAppTC();
  }, [])
  if (!props.initialized) return <Preloader />;
  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        <Route path='/login' render={() => <Login />} />
        <Route path='/add-list' render={() => <AddList />} />
        <Main />
        <Footer />
      </div>
    </BrowserRouter >
  );
}

const mapStateToProps = (state) => ({
  initialized: state.init.initialized,
})

export default connect(mapStateToProps, { initializeAppTC })(App);
