import React, { Component } from "react";
import Modal from "./Modal";

export default class ImageList extends Component {
  state = {
    ids: "",
    largeURL: ""
  };

  showModal = (id, largeImageURL) => {
    console.log(id);
    this.setState({ ids: id, largeURL: largeImageURL });
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
  };

  render() {
    return (
      <div>
        <div className="imageContainer">
          {this.props.photos.slice(0, this.props.visible).map(item => {
            return (
              <li className="imageList">
                <img
                  src={item.webformatURL}
                  key={item.id}
                  alt={item.id}
                  onClick={this.showModal.bind(
                    this,
                    item.id,
                    item.largeImageURL
                  )}
                />
                <Modal ids={this.state.ids} img={this.state.largeURL} />
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
