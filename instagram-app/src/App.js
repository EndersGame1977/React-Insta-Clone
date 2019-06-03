import React from 'react';
import './App.scss';
import data from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: data
    };
  }

  render() {
    return (
      <div>
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;