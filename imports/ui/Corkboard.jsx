import React, { Component } from 'react';
import Post from './Post.jsx';

export default class Corkboard extends Component {
  getPosts() {
    return [
      { _id: 1, title: "Hey", text: "Hello world", author: "someguy" },
      { _id: 2, title: "Uh huh", text: "this is another post", author: "cooldude20" },
      { _id: 3, title: "big boy", text: "Here is some other stuff going on", author: "wowow" }
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