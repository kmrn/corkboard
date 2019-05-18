import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return (
      <li className="post-card">
        <div className="post-header">
          <h3 className="post-title">{this.props.post.title}</h3>
        </div>
        <div className="post-body">
          <p>{this.props.post.text}</p>
        </div>
        <div className="post-author">
          
        </div>
      </li>
    );
  }
}