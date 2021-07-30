import React, { Component } from 'react'
import { CardMedia } from '@material-ui/core';
import '../Pages/asset/Feeds.css';

class AlertImage extends Component {
   
    state={
        loaded: false
    }
    
    render() {
        return (
            <div>
                {this.state.loaded ?  null :
                    <CardMedia
                    className="media"
                    image="https://i.pinimg.com/originals/91/d9/60/91d9605c47e52ba52dada8b5fd853e78.jpg"
                    onLoad={() => this.setState({loaded: true})}
                    />
                }
                
            </div>
        )
    }
}
export default AlertImage;