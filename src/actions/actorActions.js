const baseURL = 'http://localhost:3001/actors'

export function fetchActors(){
    return (dispatch) => {
        dispatch({type:'FETCHING_ACTORS'})
        fetch(baseURL)
            .then(res => res.json())
            .then(actors => {
                console.log(actors)
                dispatch({type: 'GET_ACTORS', payload: actors})
            })
    }
  }

export function fetchActor(id){
    return (dispatch) => {
        dispatch({type:'FETCHING_ACTOR'})
        fetch(baseURL + `/${id}`)
            .then(res => res.json())
            .then(actor => {
                dispatch({type:'FETCH_ACTOR', payload: actor})
            })
    }
}
