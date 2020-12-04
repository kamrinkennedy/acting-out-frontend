import React, { useState } from 'react'
import PictureForm from '../forms/PictureForm'

export default function AddPictureButton(props) {

    const [submitting, setSubmitting] = useState(false)

    const handleOnClick = () => {
        setSubmitting(!submitting)
    }


    if (submitting) {
        return <PictureForm actor={props.actor}/>
    } else {
        return <div><button onClick={() => handleOnClick()}>Add Profile Picture</button><br/></div>
    }
}
