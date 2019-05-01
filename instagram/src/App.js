import React from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data';
import NavBar from './components/NavBar/NavBar'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: ''
    };
  }

  componentDidMount() {
    this.setState( {data: dummyData})
  }

  handleChanges = e => {
    e.preventDefault();

    this.setState({
      searchText: e.target.value
    });
  };

  render() {
    return (
      <div className ='temp-class'>
      <div>
        <NavBar />
      </div>

      <div className="App">
        {this.state.data.map(data => (
          <PostContainer data={data} />
        ))}
      </div>
      </div>
    );
  }
}

export default App;
