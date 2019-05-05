import React from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import LoginPage from './components/Login/LoginPage';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(LoginPage)

class App extends React.Component {
  
  render() {
    return (
      <div>
      <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
