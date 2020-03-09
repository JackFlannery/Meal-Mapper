// The purpose of this JavaScript file is to render a RestData element into the #root div so that each of the other JavaScript files can do their jobs.

import React, {Component} from 'react';
import './App.css';
import RestData from './rest/RestData'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
  return (
    <div className="App">
      <header className="Title">
        

        <RestData/>
        
      </header>
    </div>
  );
}
}

export default App;
