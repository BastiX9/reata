import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Prompt, Redirect } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


import './Components.css';



const User = (params) => {
  return (<h1>Welcome User {params.username} </h1>);
}






class Home extends Component {



  constructor(props){
    super(props);
    this.state = {
      projects: [],
      userdata: '',
      userX: 'taube',
      passwordX: '123',
      logged: 'hallo',
      listInfo: '0'
    }
  }



  state = {
    loggedIn:false
  }

  loginHandle =  () => {
    if(this.refs.user.value==this.state.userX && this.refs.password.value==this.state.passwordX){
        this.setState(prevState=>({
          loggedIn:!prevState.loggedIn
        }))
        {this.state.loggedIn?alert('Sie haben sich ausgeloggt'):alert('Hallo Herr Taube, Sie haben sich erfolgreich eingeloggt :-)')}

        if(this.state.logged==1)
          {
            this.state.logged=0;
            
            document.getElementById('loginx').style.display = 'none';
          }
          else
          {
            this.state.logged=1;


          }

    } else {

      alert('Password oder Username stimmen nicht überein');
    }
  }





  render() {
    return(
    <div>
    <Prompt
      when={!this.state.loggedIn}
      message={(location)=>{
        return location.pathname.startsWith('/user') ? 'Are you sure?' :true
      }}
    />

    <h2>Willkommen {this.state.loggedIn?'Herr Taube':''}</h2>
    <hr />

    <label>User-Name </label><br />
    <input type="text" name="user" ref="user" onChange={this.onChange} value={this.state.user} /><br />
    <label>Passwort </label><br />
    <input type="password" name="password" ref="password" onChange={this.onChange} value={this.state.password} /><br /><br />
    <input type="button" value={this.state.loggedIn?'log out':'log in'} onClick={this.loginHandle.bind(this)} />






    <Route path="/about" exact strict render={
      ()=> {
        return (<h1>About</h1>);
      }
    } />


    <Route path="/user/:username" exact strict render={({match})=>(
      this.state.loggedIn ? ( <User username={match.params.username}/> ) : (<Redirect to="/" />)
    )} />

    </div>

  );

  }
}

export default Home;
