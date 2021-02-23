import ShopActionTypes from './shop.types'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

// dispatching the moment the function fetchCollectionsStartAsync is 
// called redux then is going to create the collectionRef then dispatch fetchCollectionStart then switch the shop.reducer state isFetching: true
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart)
 
        collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)          // whenever the collectionRef updates or whenver this code run for the 1st time this collectionRef will send snapshot representing the code of our collection array at the time this code renders 
        dispatch(fetchCollectionsSuccess(collectionsMap))
     }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
    }

    