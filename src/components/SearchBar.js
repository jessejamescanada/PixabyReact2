import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const newTerm = this.state.term
    this.setState({ term: newTerm });
    localStorage.setItem("term", this.state.term);
    this.props.newSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div>
        <form className="formContainer" onSubmit={this.handleFormSubmit}>
          <h2>What do you want to search for?</h2>
          <input
            type="text"
            name="term"
            value={this.state.term}
            onChange={this.handleChange}
            placeholder="Enter text..."
          />
          <button className="btn">Search!</button>
        </form>
      </div>
    );
  }
}
