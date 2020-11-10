const baseURL = 'http://localhost:3001/actors'

export function fetchActors(){
    console.log('a')
    return (dispatch) => {
        dispatch({type:'FETCHING_ACTORS'})
        console.log('b')
        fetch(baseURL)
            .then(res => res.json())
            .then(actors => {
                console.log('c')
                // console.log(actors)
                dispatch({type: 'GET_ACTORS', payload: actors})
            })
            console.log('d')
    }
    console.log('e')
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

export function addActor(actor){
    // debugger;
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({actor: actor})
    }

    return (dispatch) => {
        fetch(baseURL, configObj)
            .then(res => res.json())
            .then(actor => {
                debugger;
                dispatch({type: 'ADD_ACTOR', payload: actor})
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
    debugger;

    return (dispatch) => {
        fetch(baseURL + `/${actor.id}`, configObj)
            .then(res => res.json())
            .then( actor => {
                dispatch({type: 'ADD_PICTURE', payload: actor})
            })
    }
}