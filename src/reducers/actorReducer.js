export default function actorReducer(state = { actors: [], loading: true}, action){
    console.log('f')
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
        case 'ADD_ACTOR':
            return {...state, actors: [...state.actors, action.payload]}
        case 'ADD_PICTURE':
            let actorIndex = state.actors.findIndex( actor => actor.id == action.payload.id )
            return {...state, actors: [...state.actors.slice(0, actorIndex), action.payload, ...state.actors.slice(actorIndex + 1)] }
        default:
            return state;
    }
}