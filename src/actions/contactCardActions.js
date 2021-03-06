const baseURL = 'http://localhost:3001/contact_cards'

export function fetchContact(id){
    return (dispatch) => {
        dispatch({type: 'FETCHING_CONTACT'})
        fetch(baseURL + `/${id}`)
            .then(res => res.json())
            .then(contactCard => {
                dispatch({type:'FETCH_CONTACT', payload: contactCard})
            })
    }
}

export function addContactCard(contact){
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({contact_card: contact})
    }

    return (dispatch) => {
        fetch(baseURL, configObj)
            .then(res => res.json())
            .then(contactCard => {
                dispatch({type:'ADD_CONTACT', payload: contactCard})
            })
    }
}

export function editContactCard(contact, id) {
    const configObj = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({contact_card: contact})
    }
    
    return (dispatch) => {
        fetch(baseURL + `/${id}`, configObj)
        .then(res => res.json())
        .then(contactCard => {
            dispatch({type: 'EDIT_CONTACT', payload: contactCard})
        })
    }
}