import React, { Component } from 'react'
import Header from './Header';
import './asset/Feeds.css';
import FHome from './FHome'
import FHeader from './FHeader';


class FProfile extends Component {
  state = {
    friends: [
      
    ],
    comments: [
      
    ]
  }
  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    fetch('http://localhost:3030/friends?_embed=comments')
    .then(data => data.json())
    .then(response => this.setState({friends: response}));
  }

  render(){
    return (
      <div>
      <Header/>
      <FHeader/>
      {!this.state.friends
              ? <>Loading...</>
              : this.state.friends.map(friend => 
                <div>
                  <FHome 
                    author_name={friend.author_name}
                    author_avatar={friend.author_avatar}
                    created_time = {friend.created_time}
                    content_text = {friend.content_text}
                    content_image = {friend.content_image}
                    likes_count = {friend.likes_count}
                    comments_count = {friend.comments_count}
                    shares_count = {friend.shares_count}
                    comments = {friend.comments}
                    />
                </div>)
            }
      
        
    </div>
    )

  }
}
export default FProfile;