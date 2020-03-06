import React, { Component } from "react";

export default class ImageList extends Component {
  render() {
    return (
      <div>
        <div className="imageContainer">
          {this.props.photos.slice(0, this.props.visible).map(item => {
            return (
              <li className="imageList">
                <a href={item.largeImageURL}>
                  <img src={item.webformatURL} key={item.id} alt={item.id} />
                </a>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
