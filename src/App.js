import logo from './logo.svg'
import './App.scss'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import { connect } from 'react-redux'
import Preloader from './components/Preloader/Preloader'
import Main from './components/Main/Main'
import { initializeAppTC } from './redux/initializeReducer'
import { saveChangesToLocalStorage } from './redux/todoListReducer'
import AddList from './components/AddList/AddList'
import DeleteWarning from './components/List/DeleteWarning/DeleteWarning'

function App(props) {
  useEffect(async () => {
    await props.initializeAppTC()
  }, [])
  useEffect(async () => {
    console.log('save changes')
    await props.saveChangesToLocalStorage()
  }, [props.lists])
  // if (!props.initialized) return <Preloader />;
  return (
    <HashRouter >
      <div className="App">
        <Header />
        <Route path='/login' render={() => <Login />} />
        <Route path='/add-list' render={() => <AddList />} />
        <Route path='/delete-warning/:id' render={() => <DeleteWarning />} />
        <Main />
        <Footer />
      </div>
    </HashRouter >
  )
}

const mapStateToProps = (state) => ({
  initialized: state.init.initialized,
  lists: state.todo.lists
})

export default connect(mapStateToProps, { initializeAppTC, saveChangesToLocalStorage })(App)
