import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class AlertFollow extends Component {
    state={
        follow: 1600,
        isFollow: true,
    }

    handleFollow = () => {
            this.setState({
                follow:this.state.follow + 1,
               
            });
    }

    handleUnfollow = () => {
        this.setState({
            follow:this.state.follow - 1,
           
        });
}
    render() {
        return (
            <div>
                <Button 
                    variant="contained" 
                    className="btn-follow"
                    onClick={() => 
                        this.setState({isFollow: !this.state.isFollow})
                    }
                >{this.state.isFollow 
                    ? (
                        <Button  
                            onClick={() => 
                                this.handleFollow()
                            }
                        >Follow</Button>
                    )
                    : (
                        <Button 
                            onClick={() => 
                                this.handleUnfollow()
                            }
                        >Unfollow</Button>
                    )
                }</Button>
                
                
                <div >
                <a className="posts" >
                    364 
                    <a className="fthin">posts</a>
                </a>
                <a className="followers" >
                    {this.state.follow} 
                    <a className="fthin">followers</a>
                </a>
                <a className="following" >
                    16
                    <a className="fthin">following</a>
                </a>
              </div>
            </div>
        )
    }
}