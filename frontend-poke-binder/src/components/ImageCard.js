// import React from "react";
// import { Button } from "semantic-ui-react";
// import "./ImageCard.scss";
// class ImageCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { spans: 0 };
//     this.imageRef = React.createRef();
//   }
//   componentDidMount() {
//     this.imageRef.current.addEventListener("load", this.setSpans);
//   }
//   setSpans = () => {
//     const spans = Math.ceil(150 / 10);

//     this.setState({ spans });
//   };

//   render() {
//     const urls = this.props.image;
//     const description = this.props.description;

//     return (
//       <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
//         <Button style={{ background: "transparent" }}>
//           <a className="card">
//             <img
//               className="side front"
//               ref={this.imageRef}
//               alt={description}
//               src={urls}
//             />
//           </a>
//         </Button>
//       </div>
//     );
//   }
// }
// export default ImageCard;
import React, { useState } from "react";
import { Header, Image, Modal } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import "./ImageCard.scss";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0, open: false };
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
    const name = this.props.name;
    const number = this.props.pokemon_number;
    const set = this.props.pokemon_set;

    return (
      <Modal
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
        open={this.open}
        trigger={
          <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
            <Button style={{ background: "transparent" }}>
              <a className="card">
                <img
                  className="side front"
                  ref={this.imageRef}
                  alt={description}
                  src={urls}
                />
              </a>
            </Button>
          </div>
        }
      >
        <Modal.Header>Pokemon Card</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={urls} wrapped centered />
          <Modal.Description>
            <Header>
              {name} #{number}
            </Header>
            <p>{description}</p>
            <p>Set: {set}</p>(
            <p>
              Would you like to add <b>{name}</b> to your Binder?
            </p>
            )
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button color="black" onClick={() => this.setState({ open: false })}>
            Nope
          </Button>
          <Button
            content="Add Card"
            labelPosition="right"
            icon="checkmark"
            onClick={() => this.setState({ open: false })}
            positive
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
export default ImageCard;
