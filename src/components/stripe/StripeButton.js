import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_8zr509r079enJTKCy6J7UwMV00LS2HRgBe';

    const onToken = token => {
        alert('Payment Successful');
    }

    return (
        <div>
            <StripeCheckout
                label='Pay Now'
                name = 'Some Clothing Store'
                billingAddress
                shippingAddress
                image='https://sendeyo.com/up/d/f3eb2117da'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    );
};
 