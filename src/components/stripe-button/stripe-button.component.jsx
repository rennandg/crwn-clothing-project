import React from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

import { clearCart } from '../../redux/cart/cart.actions'

const StripeCheckoutButton = ({ price, clearCart }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IIpgIK2PaOVZfGoggnGjGv07Kmf9z72DYWxvENai2aYwefppV2R2t0MeoVDABsdS6vueljhq62tnlRgJ6g2yGag00FqGvPnLW'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
        clearCart()
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing React'
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
})

export default connect(null, mapDispatchToProps)(StripeCheckoutButton)