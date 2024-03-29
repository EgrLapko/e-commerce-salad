import React from 'react'

export default function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >
            {children}
        </button>
    )
};
