import React from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.data.map(data => (
          <PostContainer data={data} />
        ))}
       
      </div>
    );
  }
}

export default App;
