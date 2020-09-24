const baseURL = 'http://localhost:3001'

export function getActors(actors){
    return {type: 'GET_ACTORS', payload: actors}
}

export function fetchActors(){
    return (dispatch) => {
        dispatch({type:'FETCHING_ACTORS'})
        fetch(baseURL + '/actors')
            .then(res => res.json())
            .then(actors => {
                console.log(actors)
                dispatch(getActors(actors))
            })
    }
  }
