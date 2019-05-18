import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Posts } from '../api/posts';

export default class NewPostForm extends Component {


  handleSubmit(event) {
    event.preventDefault();

    const title = ReactDOM.findDOMNode(this.refs.titleInput).value.trim();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    const username = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();

    Posts.insert({
      title,
      text,
      username,
      createdAt: new Date()
    });

    this.props.toggleNewPostScreen();
  }

  render() {
    return (
      <div className="container">
        <form id="newPostForm" className="new-post" onSubmit={this.handleSubmit.bind(this)} >
          <div className="row">
            <label htmlFor="titleInput">Post Title</label>
            <input id="titleInput" className="form-field" type="text" ref="titleInput" placeholder="Wahoah" required />
          </div>
          <div className="row">
            <label htmlFor="nameInput">Name</label>
            <input id="nameInput" className="form-field" type="text" ref="nameInput" placeholder="John Doe" required />
          </div>
          <div className="row">
            <label htmlFor="textInput">Post Body</label>
            <textarea id="textInput" className="form-field" ref="textInput" placeholder="asdfoiwefoiwefjoiewjfpoiasd" required />
          </div>
        </form>
      </div>
    );
  }
}