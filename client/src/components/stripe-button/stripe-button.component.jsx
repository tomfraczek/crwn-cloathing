import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51Ib2iuJeim7qNw66uB1eshd8qaa32NZ2o1pm6hJctHbemVFbAeZCfbeyWsCcJBuE326n4uv4Zog2AQ7zw4IKMQdN00sRtDaQSW';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error => {
            console.log('payment error ' + error);
            alert('there was an issue with your payment. Please make sure you use provided credit card details.');
        })
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