import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import './styles.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';


class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
 
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()  
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route 
            exact 
            path='/login' 
            render={() => 
              this.props.currentUser ? (
                <Redirect to="/"/>
                ) : (
                <Login />
              )
            } 
          />
        </Switch>
    </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
 