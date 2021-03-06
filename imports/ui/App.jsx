import React from 'react';
import Header from './Header.jsx';
import Corkboard from './Corkboard.jsx';
import Footer from './Footer.jsx';
import NewPostForm from './NewPostForm.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board: true, newPost: false, newPostFormFilled: false};
  }

  toggleNewPostScreen = () => {
    this.setState({
      ...this.state,
      board: !this.state.board,
      newPost: !this.state.newPost
    });
  }

  render() {
    return (
      <div>
        {
          this.state.board &&
          <div>
            <Header />
            <Corkboard />
            <Footer />
            <button id="newPostButton" className="button-primary" onClick={this.toggleNewPostScreen}>Post Something</button>
          </div>
        }
        {
          this.state.newPost && 
          <div className="container">
            <a id="closePostButton" onClick={this.toggleNewPostScreen}>
              <svg viewport="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <line x1="2" y1="22" 
                      x2="22" y2="2" 
                      stroke="black" 
                      strokeWidth="4"/>
                <line x1="2" y1="2" 
                      x2="22" y2="22" 
                      stroke="black" 
                      strokeWidth="4"/>
              </svg>
            </a>
            <NewPostForm toggleNewPostScreen={this.toggleNewPostScreen} />
            <div id="newPostFormSubmit" className="container">
              <button className="button-primary" type="submit" form="newPostForm" value="Submit" onClick={this.submitNewPost}>Submit</button>
            </div>
          </div>
        }
      </div>
    );
  }
};