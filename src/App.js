import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
      dives: []
  };

  removeDive = index => {
    const { dives } = this.state;
  
    this.setState({
        dives: dives.filter((Dive, i) => { 
            return i !== index;
        })
    });
  }

  handleSubmit = dive => {
    this.setState({dives: [...this.state.dives, dive]});
}

render() {
  const { dives } = this.state;

  return (
    <div className="container">
        <h1>DiveLog</h1>
        <p>Add a dive with location and time spent diving.</p>
        <Table
            diveData={dives}
            removeDive={this.removeDive}
        />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
    </div>
);
}
}

export default App;