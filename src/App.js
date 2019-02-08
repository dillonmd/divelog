import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Table from './Table';
import Form from './Form';
import NightMode from './Nightmode';
import SimpleStorage from "react-simple-storage";

library.add(faMoon);

// Initial state
class App extends Component {
  state = {
      dives: []
  };

  // Remove an entry
  removeDive = index => {
    const { dives } = this.state;
  // Set State
    this.setState({
        dives: dives.filter((Dive, i) => { 
            return i !== index;
        })
    });
  }
// Handles form submit
  handleSubmit = dive => {
    this.setState({dives: [...this.state.dives, dive]});
}

// Displays app contents and form submissions
render() {
  const { dives } = this.state;

  return (
    <body>  
    <div className="container">
    <SimpleStorage parent={this} />
    <NightMode />
        <h1>DiveLog</h1>
        <p>Add a dive with location and time spent diving.</p>
        <Table
            diveData={dives}
            removeDive={this.removeDive}
        />
        <h3>Add A Dive</h3>
        <Form handleSubmit={this.handleSubmit} />
    </div>
    </body>
);
}
}

export default App;