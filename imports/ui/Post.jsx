import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return (
      <li className="post-card">
        <div className="post-header">
          <h3 className="post-title">{this.props.post.title}<span className="post-time">{this.props.post.datetime}</span></h3>
        </div>
        <div className="post-body">
          <p>{this.props.post.text}</p>
        </div>
        <div className="post-author">
          <span>{this.props.post.author}</span>
        </div>
      </li>
    );
  }
}