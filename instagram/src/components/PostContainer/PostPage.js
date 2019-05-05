import React from 'react';
import './PostPage.css';
import PostContainer from '../PostContainer/PostContainer';
import dummyData from './dummy-data';
import NavBar from '../NavBar/NavBar';

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData:[],
      searchText:''
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
 
  searchPosts = e => {

    const filterPosts = this.state.data.filter( post => 
      post.username.includes(this.state.searchText));
      
    this.setState({ 
      filteredData: filterPosts
    });
  };

  render() {
    let newData = this.state.data

    if (this.state.searchText.length > 0)
      newData = this.state.filteredData;
      
    return (
      <div className ='temp-class'>
      <div>
        <NavBar data={this.data} handleChanges={this.handleChanges} searchPosts={this.searchPosts} />
      </div>

      <div className="App">
        {newData.map(data => (
          <PostContainer data={data} />
        ))}
      </div>
      </div>
    );
  }
}

export default PostPage;