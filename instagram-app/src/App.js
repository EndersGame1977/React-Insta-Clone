import React, { Component } from 'react';
import './App.scss';
import dummyData from "./dummy-data";
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar'
import 'antd/dist/antd.css';

class App extends Component {




  render() {
    return (
      <div>
        <div>
          <div className="search-bar">
            <div>
              <SearchBar />
            </div>
          </div>

          <div className="post-container">
            <div>
              {dummyData.map(item =>
                <PostContainer data={item} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


