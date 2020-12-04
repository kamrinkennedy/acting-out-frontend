import React, {useState} from 'react'
import AddPictureButton from './AddPictureButton'

export default function Picture({actor}){

    const [addStatus, setAddStatus] = useState(false)
    const {picture_url} = actor

    const handleOnClick = () => {
        setAddStatus(!addStatus)
    }

    if (picture_url) {
        return(
            <div style={{height:'400px', width:'400px'}}>
                <img src={picture_url} alt='Profile Picture' className='profile-picture' /><br/>
            </div>
            )
    } else {
        return <AddPictureButton actor={actor}/>
    }
}