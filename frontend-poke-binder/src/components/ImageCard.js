import React from "react";
import "./ImageCard.scss";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const spans = Math.ceil(150 / 10);

    this.setState({ spans });
  };

  render() {
    const urls = this.props.image;
    const description = this.props.description;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <a className="card">
          <img
            className="side front"
            ref={this.imageRef}
            alt={description}
            src={urls}
          />
        </a>
      </div>
    );
  }
}
export default ImageCard;
