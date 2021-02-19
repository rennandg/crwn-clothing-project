import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}
return Spinner
}

export default WithSpinner 

// making HighOrderComponent or WithSpinner Component a function that takes some component that we want to wrapper with a function of our spinner loading feature and that wrapper component gets pass into
// a new component what it does it determined if its loading render that spinner overlay if isLoading is false then render the component we pass in as normal