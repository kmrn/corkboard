import React, { Component } from 'react';
import TimeAgo from 'react-timeago';

export default class Post extends Component {
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
          <a className="comments-counter"></a>
          <span>- {this.props.post.username}</span>
        </div>
      </li>
    );
  }
}