
import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import './styles.css'
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


export default class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navbar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
    </div>
    )
  }
}
