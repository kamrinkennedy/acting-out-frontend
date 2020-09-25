
export default function actorReducer(state = { actors: [], loading: true}, action){
    switch(action.type) {
        case 'GET_ACTORS':
            return {actors: action.payload, loading: false}
        case 'FETCHING_ACTORS':
            return {...state, loading: true}
        case 'FETCHING_ACTOR':
            return {...state, loading: true}
        case 'GET_ACTOR':
            return {...state, actors: action.payload, loading: false}
        case 'FETCH_ACTOR':
            return {...state, actors: [action.payload], loading: false}
        default:
            return state;
    }
}