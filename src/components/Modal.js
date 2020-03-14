import React, { Component } from "react";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("click", this.closeModal);
  }

  showModal = () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
  };

  closeModal = e => {
    const modal = document.querySelector(".modal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  closeModalX = e => {
    const modalX = document.querySelector(".modalX");
    const modal = document.querySelector('.modal')
    if (e.target === modalX) {
      modal.style.display = "none";
    }
  };

  render() {
    return (
      <div className="modalCSS">
        <div className="modal">
          <div className="modal-content">
            <p className="modalX" onClick={this.closeModalX}>
              X
            </p>
            <img
              src={this.props.img}
              key={this.props.ids}
              alt={this.props.ids}
            />
          </div>
        </div>
      </div>
    );
  }
}
