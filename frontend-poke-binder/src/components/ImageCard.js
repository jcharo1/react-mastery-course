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
import AddCardButton from "./utilites/api/api-components/AddCard";
import "./ImageCard.scss";
import DeleteCardButton from "./utilites/api/api-components/DeleteCard";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0, open: false, post: {} };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const spans = Math.ceil(150 / 10);

    this.setState({ spans });
  };
  onClickHandler = (post) => {
    this.setState({ post });
    this.setState({ open: false });
  };
  onDeleteHandler = (deleted) => {
    this.setState({ deleted });
    this.setState({ open: false });
  };

  render() {
    const urls = this.props.image;
    const description = this.props.description;
    const name = this.props.name;
    const number = this.props.pokemon_number;
    const set = this.props.pokemon_set;

    return (
      <div>
        <Modal
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          open={this.state.open}
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
            <Image
              className="cards-container"
              size="medium"
              src={urls}
              wrapped
              centered
              style={{ padding: "30px 30px" }}
            />
            <Modal.Description>
              <Header>
                {name} #{number}
              </Header>
              <p>{description}</p>
              <p>Set: {set}</p>
              <p>
                Would you like to add <b>{name}</b> to your Binder?
              </p>
            </Modal.Description>
          </Modal.Content>

          <Modal.Actions>
            <Button
              color="black"
              onClick={() => this.setState({ open: false })}
            >
              Back
            </Button>
            <DeleteCardButton
              pokemonName={name}
              onCall={this.onDeleteHandler}
            />
            <AddCardButton
              content="Add Card"
              labelPosition="right"
              icon="checkmark"
              onCall={this.onClickHandler}
              positive
              style={{ margin: "10px" }}
              pokemonName={name}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
export default ImageCard;
