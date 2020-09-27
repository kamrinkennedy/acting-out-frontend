const baseURL = 'http://localhost:3001/contact_cards'

export function fetchContact(id){
    return (dispatch) => {
        dispatch({type: 'FETCHING_CONTACT'})
        fetch(baseURL + `/${id}`)
            .then(res => res.json())
            .then(contactCard => {
                // debugger;
                dispatch({type:'FETCH_CONTACT', payload: contactCard})
            })
    }
}