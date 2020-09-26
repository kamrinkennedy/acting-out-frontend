import React, { Component } from 'react'
import PictureForm from '../forms/PictureForm'

class AddPictureButton extends Component {

    state = {
        submitting: false
    }

    handleOnClick = () =>{
        this.setState(prevState => {
            return {submitting: !prevState.submitting}
        })
    }

    render(){
        if (this.state.submitting) {
            return <PictureForm actor={this.props.actor}/>
        }
        return <div><button onClick={this.handleOnClick}>Add Profile Picture</button><br/></div>
    }
}

export default AddPictureButton