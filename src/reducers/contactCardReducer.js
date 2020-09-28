export default function contactCardReducer(state = {contactCard: {}, loading: true}, action){
    switch(action.type){
        case 'FETCHING_CONTACT':
            return { loading: true }
        case 'FETCH_CONTACT': 
            return { contactCard: action.payload, loading: false }
        case 'ADD_CONTACT': 
            return { contactCard: action.payload }
        case 'EDIT_CONTACT':
            return { contactCard: action.payload }
        default:
            return state;
    }
}