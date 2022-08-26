import React, { useState } from "react";
import { Button, Header, Image, Modal, Grid, Segment } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCardButton from "./utilites/api/api-components/AddCard";
import "./ImageCard.scss";
import DeleteCardButton from "./utilites/api/api-components/DeleteCard";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0, open: false, post: {}, deleted: {} };
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

    toast.success(
      post.pokemon_added + " has successfully been added to your Binder!",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    console.log(this.state);
  };

  onDeleteHandler = (deleted) => {
    this.setState({ deleted });
    console.log(deleted);
    this.setState({ open: false });
    toast.success(
      deleted.deleted + " has successfully been deleted from your Binder!",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
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
          closeIcon
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

          <Modal.Actions style={{ background: "transparent" }}>
            <Grid container columns="equal">
              <Grid.Column>
                <DeleteCardButton
                  pokemonName={name}
                  onCall={this.onDeleteHandler}
                />
              </Grid.Column>
              <Grid.Column>
                <AddCardButton
                  content="Add Card"
                  icon="checkmark"
                  onCall={this.onClickHandler}
                  pokemonName={name}
                />
              </Grid.Column>
            </Grid>
          </Modal.Actions>
        </Modal>
        <ToastContainer />
      </div>
    );
  }
}
export default ImageCard;
