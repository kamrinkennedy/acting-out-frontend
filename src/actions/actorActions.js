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

export function addPicture(actor){

    const configObj = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({picture_url: actor.url})
    }

    return (dispatch) => {
        fetch(baseURL + `/${actor.id}`, configObj)
            .then(res => res.json())
            .then( actor => {
                dispatch({type: 'ADD_PICTURE', payload: actor})
            })
    }
}