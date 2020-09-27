import React from 'react'
import AddPictureButton from './AddPictureButton'

export default class Picture extends React.Component{

    state = {
        addStatus: false
    }

    handleOnClick = () => {
        // debugger;
        this.setState({
            addStatus: true
        })
    }

    render(){
        if (this.props.actor.picture_url) {
        return(
            <div style={{height:'400px', width:'400px'}}>
                <img src={this.props.actor.picture_url} alt='Profile Picture' className='profile-picture' /><br/>
            </div>
            )
        }
        return <AddPictureButton actor={this.props.actor}/>
    }
}