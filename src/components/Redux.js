import React, { Component } from 'react';
import Posts from './Posts';
import PostForm from './Postform';
import { Provider } from 'react-redux';

import store from '../store';

/*const Redux = () => (
  <div>
    <h2>Redux</h2>
  </div>
);*/

class Redux extends Component{
  render(){
    return(
      <Provider store={store}>
      <div>
      <h2>Redux</h2>
      <hr />
      <PostForm />
      <hr />
      <Posts />
      </div>
      </Provider>
    );
  }
}

export default Redux;
