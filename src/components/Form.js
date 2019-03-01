import React, { Component } from "react";

// Sets initial state of form
class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      number: 0,
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
    this.initialState.number = this.initialState.number + 1;
  };
  // Displays form
  render() {
    const { location, duration, depth, date } = this.state;

    return (
      <form>
        <label>Date</label>
        <input
          type="text"
          name="date"
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
        <div className="submit-wrapper" name="wrapper">
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
