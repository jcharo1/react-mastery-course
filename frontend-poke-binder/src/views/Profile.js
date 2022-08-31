import React, { useEffect, useState } from "react";
import ProfileBar from "../components/ProfileBar";
import image from "../images/636.png";
import ShareLinkButton from "../components/ShareLinkButton";
import ImageList from "../components/ImageList";
import { useAuth0 } from "@auth0/auth0-react";
import getUserData from "../components/utilites/api/api-components/RetrieveUserInfo";
import axios from "axios";
import ProfileBinder from "../components/ProfilePageCards";
import TopCards from "../components/ProfilePageTopCards";
import "../components/ProfilePageTopCards.scss";
import {
  Button,
  Header,
  Image,
  Modal,
  Grid,
  Segment,
  Container,
} from "semantic-ui-react";

const Profile = () => {
  const [userMetadata, setUserMetadata] = useState({});

  const { user, getAccessTokenSilently } = useAuth0();
  //   let usernumID = user.ProfileUserID;
  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const token = await getAccessTokenSilently();
        const metadataResponse = await axios.get(
          "http://127.0.0.1:5000/user/" + 2,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const user_metadata = await metadataResponse.data;

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, []);

  //   let { id } = useParams();
  //   let notmyprofile = id ? true : false;

  return (
    user && (
      <Grid stackable columns="equal">
        <Grid.Column width={3}>
          {/* <div className="ui segment"> */}
          {/* <p>{JSON.stringify(userMetadata)}</p> */}
          <Grid.Row
            style={{
              padding: "10px 10px 10px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <img
              alt="Profile"
              className="ui centered medium circular image"
              src={image}
            />

            <div className="content">
              <h2 className="header" style={{ textAlign: "center" }}>
                {user.name}
              </h2>
            </div>
          </Grid.Row>
          <Grid.Row
            style={{
              padding: "10px 10px 40px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <ProfileBar
              jungleSet={userMetadata.Jungle_Set}
              baseSet={userMetadata.Base_Set}
              fossil={userMetadata.Fossil_Set}
            />{" "}
          </Grid.Row>

          <Grid.Row
            centered
            style={{
              padding: "10px 10px 10px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <ShareLinkButton />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row
            style={{
              padding: "10px 10px 40px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <Segment style={{}}>
              <TopCards />
            </Segment>
            <Segment>
              {" "}
              <ImageList pokemon={userMetadata.pokemon_cards || []} />
            </Segment>
          </Grid.Row>
        </Grid.Column>

        {/* </div> */}
      </Grid>
    )
  );
};

export default Profile;
