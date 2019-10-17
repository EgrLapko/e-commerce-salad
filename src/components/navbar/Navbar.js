import React from 'react';
import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartDropdown from '../cartDropdown/CartDropdown';

function Navbar({ currentUser, hidden }) {
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
                <CartIcon/>
            </div>
            {
                hidden ? null : <CartDropdown/>
            }
        </nav>   
    ) 
}
 
const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})

export default connect(mapStateToProps)(Navbar);
   