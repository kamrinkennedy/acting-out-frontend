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

export function addBioCard(bioCard) {
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({bio_card: bioCard})
    }

    return (dispatch) => {
        fetch(baseURL, configObj)
            .then(res => res.json())
            .then(bioCard => {
                dispatch({type:'ADD_BIO', payload: bioCard})
            })
    }
}

export function editBioCard(bioCard, id) {
    const configObj = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({bio_card: bioCard})
    }
    
    return (dispatch) => {
        fetch(baseURL + `/${id}`, configObj)
        .then(res => res.json())
        .then(bioCard => {
            dispatch({type: 'EDIT_BIO', payload: bioCard})
        })
    }

}