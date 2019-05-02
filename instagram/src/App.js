import React from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import withAuthenticate from './components/authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)

class App extends React.Component {
  constructor() {
    super();
  
  }

  render() {
    return (
      <div>
     <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
