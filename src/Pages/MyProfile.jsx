import React, { Component } from 'react'
import Header from './Header';
import './asset/Feeds.css';
import MyHome from './MyHome';
import MyHeader from './MyHeader';


class MyProfile extends Component {
  state = {
    mines: [
      
    ],
    comments: [
      
    ]
  }
  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    fetch('http://localhost:3030/mines?_embed=comments')
    .then(data => data.json())
    .then(response => this.setState({mines: response}));
  }
  render() {
    return (
      <div>
      <Header/>
      <MyHeader/>
      {!this.state.mines
            ? <>Loading...</>
            : this.state.mines.map(mine => 
              <div>
                <MyHome 
                  author_name={mine.author_name}
                  author_avatar={mine.author_avatar}
                  created_time = {mine.created_time}
                  content_text = {mine.content_text}
                  content_image = {mine.content_image}
                  likes_count = {mine.likes_count}
                  comments_count = {mine.comments_count}
                  shares_count = {mine.shares_count}
                  comments = {mine.comments}
                  />
              </div>)
          }
      
      
        
    </div>
    )
  }
}

export default MyProfile;


