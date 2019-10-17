import React from 'react';
import CustomButton from '../custom-button/CustomButton';

export default function CartDropdown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    )
}
