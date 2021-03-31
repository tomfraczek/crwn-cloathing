import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51Ib2iuJeim7qNw66uB1eshd8qaa32NZ2o1pm6hJctHbemVFbAeZCfbeyWsCcJBuE326n4uv4Zog2AQ7zw4IKMQdN00sRtDaQSW';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesfull')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Cloathing Ltd.' 
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your price is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;