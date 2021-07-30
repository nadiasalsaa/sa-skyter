import React, { Component } from 'react';
import Header from './Header';
import './asset/Feeds.css';
import Cards from './Cards';
import AlertDialogNewPost from '../components/AlertDialogNewPost';


class Feeds extends Component {
  state = {
    posts: [
      
    ],
    comments: [
      
    ],
  }
  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    fetch('http://localhost:3030/posts?_embed=comments')
    .then(data => data.json())
    .then(response => this.setState({posts: response}));
  }

  
  
  render() {
    
    return (
      <div>
          <Header/>
          <AlertDialogNewPost />
          {!this.state.posts
            ? <>Loading...</>
            : this.state.posts.map(post => 
              <div>
                <Cards 
                  author_name={post.author_name}
                  author_avatar={post.author_avatar}
                  created_time = {post.created_time}
                  content_text = {post.content_text}
                  content_image = {post.content_image}
                  likes_count = {post.likes_count}
                  comments_count = {post.comments_count}
                  shares_count = {post.shares_count}
                  comments = {post.comments}
                  />
              </div>)
          }
          {/* {this.state.posts.map(post => {
             return (
             )
          })} */}
          
      </div>
    )
  }
}

export default Feeds;
