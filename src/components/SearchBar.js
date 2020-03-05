import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    term: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name] : value})
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const newTerm = this.state.term
    this.setState({term: newt})
    this.props.newSubmit(this.state.term)
    console.log(this.state.term);
  }

  render() {
    return (
      <div>
        <form className="formContainer" onSubmit={this.handleFormSubmit}>
          <input type="text"
          name='term'
          value={this.state.term}
          onChange={this.handleChange}
          />
        </form>
        
      </div>
    )
  }
}
