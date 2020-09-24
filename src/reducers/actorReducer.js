import React from 'react'

export default function actorReducer(state = { actors: [], loading: false}, action){
    switch(action.type) {
        case 'GET_ACTORS':
            console.log(action.payload)
            return {actors: action.payload, loading: false}
        case 'FETCHING_ACTORS':
            return {...state, loading: true}
        default:
            return state;
    }
}