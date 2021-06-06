import logo from './logo.svg';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';
import Modal from './components/Modal/Modal';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

function App() {
  const [modalActive, setModalActive] = useState(false)

  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        <Route path='/login' render={() => <Login/>} />
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
