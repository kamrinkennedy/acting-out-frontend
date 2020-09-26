export default function bioCardReducer(state= { bioCard: {}, loading: true }, action){
    switch(action.type){
        case 'FETCHING_BIO':
            return { loading: true }
        case 'FETCH_BIO':
            return { bioCard: action.payload, loading: false }
        default:
            return state;
    }
}