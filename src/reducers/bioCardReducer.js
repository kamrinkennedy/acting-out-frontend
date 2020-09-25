export default function bioCardReducer(state= { biocard: {}, loading: true }, action){
    switch(action.type){
        case 'FETCHING_BIO':
            return { loading: true }
        case 'FETCH_BIO':
            return { biocard: action.payload, loading: false }
        default:
            return state;
    }
}