import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DeveloperBio from './DeveloperBio';
import DisplayBio from './DisplayBio';
import Developer from './Developer';
import AddDeveloper from './AddDeveloper';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';

class App extends Component {

  
  constructor(props) {
    super();

    this.state = {
        developers :[
            new Developer(1, "Bikramjit", "Sanjenbam", "JAVA", 2005),                
            new Developer(2, "ABC", "Lastss", "REACTJS", 2015)
        ]
    }

  }

addDeveloper = (dev) =>{
  dev.id = this.state.developers.length + 1;
  let newDevs = [...this.state.developers, dev];
  this.setState({developers:newDevs});
}

  render() {
      return (
 
         
      <Router>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch> 
          <Route exact path="/">
            <Home /> 
          </Route>

          <Route path="/bios">
           <DisplayBio  developers={this.state.developers}/> 
          </Route>
          
          <Route path="/create-bio">
            <AddDeveloper addDeveloper={this.addDeveloper}/>
          </Route>
        
        </Switch>
     </Router>
      );
  }
}

export default App;
