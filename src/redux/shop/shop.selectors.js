import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'


const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

//create a new selector that can convert our object into an array using a method
// Method Object.keys what it does is it get us all the keys of an object that we passed into it then give us back an array format

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : [] // this show that we want to get all the key of collections and map all the array of keys so we get the value of our collection object
)

export const selectCollection = memoize((collectionUrlParam) => 
    createSelector(                 //map over the collection by selecting it then passing into our new selectCollection to the string collectionUrlParam
        [selectCollections],            // that will return createSelector that's called a currying function that creates another function
        collections => (collections ? collections[collectionUrlParam] : null)                                  //Base on the function we pass it. it's going to run eact element from left to right in our array
    )                                      // till it find where the function return true and give then it give's back the element that returns true
)