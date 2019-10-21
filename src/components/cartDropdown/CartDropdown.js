import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart-selectors';

function CartDropdown({ cartItems }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(cartItem =>
                    <CartItem key={cartItem.id} item={cartItem} />
                )}
            </div>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);