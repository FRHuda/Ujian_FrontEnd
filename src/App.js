import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Header from './components/Header';
import homePage from './components/homePage';
import KursiLagi from './components/kursilagi';
import loginPage from './components/loginPage';
import registerPage from './components/registerPage';
import Cinema from './components/Cinema';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <br/>
        <br/>
        <Route exact path='/' component={homePage}/>
        <Route exact path='/login' component={loginPage}/>
        <Route exact path='/register' component={registerPage}/>
        <Route exact path='/cinema' component={Cinema}/>
        <Route exact path='/kursilagi' component={KursiLagi}/>
      </div>
    );
  }
}

export default App;
