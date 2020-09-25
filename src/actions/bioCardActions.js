const baseURL = 'http://localhost:3001/bio_cards'

export function fetchBio(id){
    return (dispatch) => {
        dispatch({type: 'FETCHING_BIO'})
        fetch(baseURL + `/${id}`)
            .then(res => res.json())
            .then(bioCard => {
                dispatch({type:'FETCH_BIO', payload: bioCard})
            })
    }
}