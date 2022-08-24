import React, { useEffect, useState } from "react";
import ProfileBar from "../components/ProfileBar";
import image from "../images/636.png";
import ShareLinkButton from "../components/ShareLinkButton";
import ImageList from "../components/ImageList";
import { useAuth0 } from "@auth0/auth0-react";
import getUserData from "../components/utilites/api/api-components/RetrieveUserInfo";
import axios from "axios";
import ProfileBinder from "../components/ProfilePageCards";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const Profile = () => {
  const [userMetadata, setUserMetadata] = useState({});

  const { user, getAccessTokenSilently } = useAuth0();
  let usernumID = user.ProfileUserID;
  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const token = await getAccessTokenSilently();
        const metadataResponse = await axios.get(
          "http://127.0.0.1:5000/user/" + usernumID,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // console.log(metadataResponse);
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
      <div className="ui segment">
        {/* <p>{JSON.stringify(userMetadata)}</p> */}
        <img
          alt="Profile"
          className="ui centered medium circular image"
          src="https://lh3.googleusercontent.com/a-/AFdZucq6VIoWdHCy1phoca-9Zpg9pxZp9fnNOkm3jguGEg=s96-c"
        />

        <div className="content">
          <h2 className="header" style={{ textAlign: "center" }}>
            {user.name}
          </h2>
          <ProfileBar
            jungleSet={userMetadata.Jungle_Set}
            baseSet={userMetadata.Base_Set}
            fossil={userMetadata.Fossil_Set}
          />
          <ProfileBinder cards={userMetadata.pokemon_cards || []} />
          <ShareLinkButton />
        </div>
      </div>
    )
  );
};

export default Profile;
