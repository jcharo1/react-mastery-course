import React, { useState } from "react";
import { Button, Header, Image, Modal, Grid, Segment } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gbBorder from "../images/gbBorder2.png";
import gbBorder1 from "../images/gbBorder.png";
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
    const spans = Math.ceil(200 / 10);

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
    const externalImage = gbBorder;
    const modalbg = gbBorder1;
    return (
      <div>
        <Modal
          style={{ background: "transparent" }}
          closeIcon
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          open={this.state.open}
          trigger={
            <div>
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
          {/* <Modal.Header>
            <Grid container columns={3}>
              <Grid.Column></Grid.Column>
              <Grid.Column
                style={{
                  fontFamily: "pokemon_gbregular",
                  textAlign: "center",
                  backgroundImage: `url(${externalImage})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  padding: "20px 100px",
                  filter: "drop-shadow(10px 10px 10px grey)",
                }}
              >
                {" "}
                Pokemon Card
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid>
          </Modal.Header> */}
          <Modal.Content
            image
            style={{
              background: "rgba(255, 255, 255, 0.59)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <Image
              className="cards-container center"
              src={urls}
              size="large"
              wrapped
            />

            <Modal.Description>
              <Grid
                container
                style={{
                  backgroundImage: `url(${externalImage})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  padding: "60px",
                  filter: "drop-shadow(10px 10px 10px grey)",
                }}
              >
                <Header style={{ fontFamily: "'pokemon_gbregular'" }}>
                  {name} #{number}
                </Header>
                <p>{description}</p>
                <p>Set: {set}</p>
                <p>
                  Would you like to add <b>{name}</b> to your Binder?
                </p>
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
                      onCall={this.onClickHandler}
                      pokemonName={name}
                    />
                  </Grid.Column>
                </Grid>
              </Grid>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <ToastContainer />
      </div>
    );
  }
}
export default ImageCard;
