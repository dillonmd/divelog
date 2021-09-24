import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import SimpleStorage from "react-simple-storage";
import { withAuthorization } from '../Session';

class Divelog extends Component {
  // Initial state
  state = {
    dives: []
  };

  // Remove an entry from the log
  removeDive = index => {
    const { dives } = this.state;
    // Set State
    this.setState({
      dives: dives.filter((dive, i) => {
        return i !== index;
      })
    });
  };

  // Handle form submit
  handleSubmit = dive => {
    this.setState({ dives: [...this.state.dives, dive] });
  };

  // Displays app contents
  render() {
    const { dives } = this.state;

    return (
      <div className="container">
        <SimpleStorage parent={this} />
        <h1>Dive Dot</h1>
        <h3>Past Dives</h3>
        <Table diveData={dives} removeDive={this.removeDive} />
        <h3>Add A Dive</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Divelog);
