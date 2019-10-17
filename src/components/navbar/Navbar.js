import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

function Navbar({ currentUser }) {
    return (
        <nav className="navbar">
            <Link className="logo-container" to="/"> <Logo className="logo" /> </Link>
            <div className="menu">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/login">SIGN IN</Link>
                }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Navbar);
  