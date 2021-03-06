import React, { Component } from "react";

// Sets initial state of form
class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      number: "",
      location: "",
      duration: "",
      depth: "",
      date: ""
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  // Submits form
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  // Displays form
  render() {
    const { number, location, duration, depth, date } = this.state;

    return (
      <form>
        <label>Number</label>
        <input
          type="text"
          name="number"
          value={number}
          onChange={this.handleChange}
        />
        <label>Date</label>
        <input
          type="text"
          name="date"
          // placeholder= {this.datePlaceholder}
          value={date}
          onChange={this.handleChange}
        />
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={this.handleChange}
        />
        <label>Duration</label>
        <input
          type="text"
          name="duration"
          value={duration}
          onChange={this.handleChange}
        />
        <label>Depth</label>
        <input
          type="text"
          name="depth"
          value={depth}
          onChange={this.handleChange}
        />
        <div className="submit" name="submit">
          <input
            type="button"
            value="Submit"
            className="submit-btn"
            onClick={this.submitForm}
          />
        </div>
      </form>
    );
  }
}

export default Form;
