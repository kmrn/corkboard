import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import TimeAgo from 'react-timeago';

import { Posts } from '../api/posts.js';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.likePost = this.likePost.bind(this);
  }

  likePost() {
    Meteor.call('posts.like', this.props.post._id);
  }

  render() {
    return (
      <li className="post-card">
        <div className="post-header">
          <h3 className="post-title">{this.props.post.title}<span className="post-time"><TimeAgo date={this.props.post.createdAt} /></span></h3>
        </div>
        <div className="post-body">
          <p>{this.props.post.text}</p>
        </div>
        <div className="post-author">
          {/* <a className="comments-counter"></a> */}
          <span className="like-counter" onClick={this.likePost}>&hearts;{this.props.post.likes}</span>
          <span>- {this.props.post.username}</span>
        </div>
      </li>
    );
  }
}