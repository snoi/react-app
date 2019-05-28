import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css';
      

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null,
    findText: 'food',
    token: null,
    loadingText: 'Load More',
    isLogin: false,
    username: '',
        password: ''
  }

  render() {
    return (
      <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/dashboard' exact component={Dashboard} />
        {/* <Route 
          render={props => {
            const token = localStorage.getItem('token')

            if (token) {
              return <h1>Welcome!</h1>
            } else {
              props.history.push('/')
            }
          }} /> */}
      </Switch>

      <hr />
      {/* <p>Copyright &copy; 2019</p> */}
    </Router>
    );
  }
}

export default App;
