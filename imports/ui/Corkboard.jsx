import React, { Component } from 'react';
import Post from './Post.jsx';

export default class Corkboard extends Component {
  getPosts() {
    return [
      { _id: 1, title: "Hey", text: "Hello world" },
      { _id: 2, title: "Uh huh", text: "this is another post" },
      { _id: 3, title: "big boy", text: "Here is some other stuff going on" }
    ];
  }

  renderPosts() {
    return this.getPosts().map((post) => (
      <Post key={post._id} post={post} />
    ));
  }

  render() {
    return (
      <div className="container">
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}