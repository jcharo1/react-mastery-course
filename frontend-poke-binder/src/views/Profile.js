import React from "react";
import Example from "../components/ProfileBar";
import image from "../images/636.png";
import ShareLinkButton from "../components/ShareLinkButton";
import ImageList from "../components/ImageList";
const Profile = () => {
  return (
    <div className="ui segment">
      <img
        alt="Profile"
        className="ui centered medium circular image"
        src={image}
      />
      <div className="content">
        <h2 className="header" style={{ textAlign: "center" }}>
          Likeys Page
        </h2>
        <Example />

        <ShareLinkButton />
      </div>
    </div>
  );
};

export default Profile;
