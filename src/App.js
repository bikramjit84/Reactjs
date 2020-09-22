import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DeveloperBio from './DeveloperBio';
import DisplayBio from './DisplayBio';
import Developer from './Developer';
import AddDeveloper from './AddDeveloper';


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
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

            <DisplayBio  developers={this.state.developers}/> 
            <AddDeveloper addDeveloper={this.addDeveloper}/>


          </header>

        
        </div>
      );
  }
}

export default App;
