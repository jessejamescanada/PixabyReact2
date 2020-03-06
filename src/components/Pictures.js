import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";

export default class Pictures extends Component {
  state = {
    apiKey: "15445371-5ad66d0e837e3a3178ba34189",
    photos: [],
    errorMessage: "",
    visible: 12,
    btn: ""
  };

  componentDidMount = async q => {
    window.addEventListener("scroll", this.handleScroll);
    let err;
    this.setState({ visible: 12 });
    q = localStorage.getItem("term");
    await fetch(
      `https://pixabay.com/api/?key=${this.state.apiKey}&q=${q}&orientation=horizontal&per_page=72`
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
      b = (
        <button onClick={this.topFunction} className="topBTN">
          TOP!
        </button>
      );
      this.setState({ btn: b });
    } else {
      this.setState({ btn: "" });
    }
  };

  topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  nextPage = () => {
    this.setState(prev => {
      return { visible: prev.visible + 12 };
    });
  };

  render() {
    return (
      <div>
        <SearchBar newSubmit={this.componentDidMount} />
        <h3 className="err">{this.state.errorMessage}</h3>
        <ImageList photos={this.state.photos} visible={this.state.visible} />
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
