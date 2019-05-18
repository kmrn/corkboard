import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Posts } from  '../api/posts.js';

import Post from './Post.jsx';

class Corkboard extends Component {
  renderPosts() {
    return this.props.posts.map((post) => (
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

export default withTracker(() => {
  return {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch()
  };
})(Corkboard);