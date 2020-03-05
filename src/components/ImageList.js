import React, { Component } from "react";

export default class ImageList extends Component {
  state = {
    visible: 12,
    btn: ''
  }

  nextPage = () => {
    let v;
    this.setState(prev => {
      return { visible: prev.visible + 12 };
    });
  };
  render() {
    return (
      <div>
        <div className="imageContainer">
          {this.props.photos.slice(0, this.state.visible).map(item => {
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
          {this.state.visible < this.props.photos.length && (
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
