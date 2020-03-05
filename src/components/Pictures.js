import React, { Component } from "react";

export default class Pictures extends Component {
  state = {
    apiKey: "15445371-5ad66d0e837e3a3178ba34189",
    photos: [],
    term: "",
    errorMessage: "",
    visible: 12,
    btn: ""
  };

  componentDidMount = async q => {
    window.addEventListener("scroll", this.handleScroll);
    let err;
    q = localStorage.getItem("term");
    await fetch(
      `https://pixabay.com/api/?key=${this.state.apiKey}&q=${q}&orientation=horizontal&per_page=48`
    )
      .then(response => response.json())
      .then(data => this.setState({ photos: data.hits }));
    if (this.state.photos.length === 0) {
      err = <strong>No Results</strong>;
      this.setState({ errorMessage: err });
    } else {
      this.setState({ errorMessage: "" });
    }
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let b;
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      b = <button onClick={this.topFunction} className='topBTN'>TOP!</button>;
      this.setState({ btn: b });
    } else {
      this.setState({ btn: "" });
    }
  };

  topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    let q;
    e.preventDefault();
    const newTerm = this.state.term;
    this.setState({ term: newTerm });
    q = localStorage.setItem("term", this.state.term);
    this.setState({ visible: 12 });
    console.log(this.state.term);
    this.componentDidMount();
    this.setState({ term: "" });
  };

  nextPage = () => {
    let v;
    this.setState(prev => {
      return { visible: prev.visible + 12 };
    });
  };

  render() {
    return (
      <div>
        <form className="formContainer" onSubmit={this.handleFormSubmit}>
          <h2>What do you want to search for?</h2>
          <br />
          <input
            type="text"
            name="term"
            value={this.state.term}
            onChange={this.handleChange}
            placeholder="Enter some text..."
          />
          <h3>{this.state.errorMessage}</h3>
          <button className="btn">Search!</button>
        </form>
        <div className="imageContainer">
          {this.state.photos.slice(0, this.state.visible).map(item => {
            return (
              <li className="imageList">
                <a href={item.largeImageURL}>
                  <img src={item.webformatURL} key={item.id} alt={item.id} />
                </a>
              </li>
            );
          })}
        </div>
        <div className="buttonContainer">
        {this.state.visible < this.state.photos.length && (
          <button onClick={this.nextPage} className="loadBTN">
            Load More
          </button>
        )}
        {this.state.btn}
        </div>
      </div>
    );
  }
}
