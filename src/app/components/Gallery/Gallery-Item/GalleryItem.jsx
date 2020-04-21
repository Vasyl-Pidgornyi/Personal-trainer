import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GalleryItem.scss";

export class GalleryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBox: false
    };
    this.handleBoxToggle = () =>
      this.setState({ showBox: !this.state.showBox });
  }

  render() {
    return (
      <div className="col-4 gallery__item">
        <div className={`gallery__item_cover ${this.props.image}`}>
          <div
            onMouseEnter={this.handleBoxToggle}
            onMouseLeave={this.handleBoxToggle}
            className={`gallery__item_content ${
              this.state.showBox ? "show" : ""
            }`}
          >
            <div className="gallery__item_description gallery__description">
              <h1 className="gallery__description_header">
                {this.props.header}
              </h1>
              <p className="gallery__description_text">
                {this.props.description}
              </p>
              <Link
                className="gallery__item_link"
                to={{
                  pathname: "/Gallery-detailed",
                  state: {
                    info: this.props
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
