import React from "react";
import { Image } from "semantic-ui-react";
import { useState } from "react";
import { storage } from "../components/fireBase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import TopCards from "../components/ProfilePageTopCards";
import "../components/ProfilePageTopCards.scss";
import {
  Button,
  Header,
  Modal,
  Grid,
  Segment,
  Container,
} from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
const AccountSettings = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const handleImageChange = (e) => {
    console.log(e.target.files);
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleSubmit = () => {
    const imageRef = ref(storage, uuidv4());
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting image url ");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <Grid container columns={1}>
        <Grid.Column>
          account settings
          <Image src={url} size="medium" circular />
          <input type="file" onChange={handleImageChange} />
          <button onClick={handleSubmit}>Submit</button>
          <TopCards />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default AccountSettings;
