import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Prompt, Redirect } from "react-router-dom";
import uuid from 'uuid';
import logo from './logo.svg';
import Home from './components/Home';
import Liste from './components/Liste';
import Redux from './components/Redux';
import Veranstaltungen from './components/Veranstaltungen';
import './App.css';
import './components/Components.css';
import Intranet from './components/Intranet';
import Intranet2 from './components/Intranet2';
import Dokumentation from './components/Dokumentation';




class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      projects: [],
      listDataFromChild: '3',
      menu:''
    }
  }

  checkoutput()
  {
    document.getElementById('loginx').style.display = 'hidden';

    if(this.state.listDataFromChild==0)
    {
      this.state.menu="halloWelt";
      document.getElementById('loginx').style.display = 'none';

    }
    else
    {
      this.state.menu="";
      document.getElementById('loginx').style.display = 'none';

    }
  }


  /*myCallback = (dataFromChild) => {
    //this.state.logged1=dataFromChild;
    //console.log(this.state.logged1);
    this.setState({ listDataFromChild:dataFromChild });
    this.checkoutput();
  }*/






  render() {
    return (
      <Router>
      <div className="Background">
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">{this.state.listDataFromChild}  Finale Abgabe in Webentwicklung und Javascript Frameworks</h1>
          <h3>von Sebastian Wagner und Artjom Glock</h3>

        </header>




            <div className="Navigation">


                  <NavLink className="Nav" to="/" exact activeStyle={
                    {color: 'black'}
                  }>Home</NavLink> &nbsp;

                  <NavLink className="Nav" to="/veranstaltungen" exact activeStyle={
                    {color: 'black'}
                  }>Liste</NavLink> &nbsp;


                  <NavLink className="Nav" to="/intranet" exact activeStyle={
                    {color: 'black'}
                  }>Gebuchte Veranstaltungen</NavLink> &nbsp;







              <br />
              <br />
              <hr />





              {this.state.menu}

              <div id="loginx">
                <Route exact path="/" component={Home} />
                <Route exact path="/veranstaltungen" component={Veranstaltungen} />
                <Route exact path="/intranet" component={Intranet} />
                <Route exact path="/intranet2" component={Intranet2} />                
                <Route exact path="/dokumentation" component={Dokumentation} />
              </div>


            </div>

            </div>


      </div>

      </Router>

    );

  }
}

export default App;
