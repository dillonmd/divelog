import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Number</th>
        <th>When</th>
        <th>Location</th>
        <th>Duration</th>
        <th>Depth</th>
        <th id="delete">Delete</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.diveData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.number}</td>
        <td>{row.date}</td>
        <td>{row.location}</td>
        <td>{row.duration}</td>
        <td>{row.depth}</td>
        <td>
          <button onClick={() => props.removeDive(index)}>X</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { diveData, removeDive } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody diveData={diveData} removeDive={removeDive} />
      </table>
    );
  }
}

export default Table;
