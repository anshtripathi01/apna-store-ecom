

const stateReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS': return { ...state, products: action.payload }
        case 'SET_SORT_TYPE': return { ...state, sortBy: action.payload }
        case 'SET_CATEGORY': return state.sortByFilters.sortByCategory.includes(action.payload) ? { ...state, sortByFilters: { ...state.sortByFilters, sortByCategory: state.sortByFilters.sortByCategory.filter(item => item !== action.payload) } } :
            { ...state, sortByFilters: { ...state.sortByFilters, sortByCategory: state.sortByFilters.sortByCategory.concat(action.payload) } }


        case 'SET_RATING': return { ...state, rating: action.payload }
        case 'CLEAR_ALL_FILTERS': return {
            ...state,
            sortBy: null,
            rating: 0,
            sortByFilters: {
                sortByCategory: []
            }
        }
        case "SET_CART": return { ...state, cart: action.payload }
        case 'SET_WISHLIST':return {...state,wishlist:action.payload}
        default: return state
    }

}

export default stateReducer