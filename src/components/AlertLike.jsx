import React, { Component } from 'react'
import '../Pages/asset/Feeds.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import { IconButton } from '@material-ui/core';

export default class AlertLike extends Component {
    state={
        like: 8,
    }

    handleLike = () => {
        this.setState({
            like:this.state.like + 1,
           
        });
    }
    render() {
        return (
            <div>
                
                <IconButton onClick={() => this.handleLike() } className="badge">
                <Badge badgeContent={this.state.like}>
                    <FavoriteIcon  className="icon"/>
                </Badge>
                </IconButton>

            </div>
        )
    }
}
