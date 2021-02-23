import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'


import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionsOverview from './collections-overview.component'

const mapStateToProps = createStructuredSelector ({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose (
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)


export default CollectionsOverviewContainer


// function can evaluate from inside out.. the withSpinner will wrapped around CollectionsOverview giving us CollectionsOverview with spinner component then will pass in to our connect