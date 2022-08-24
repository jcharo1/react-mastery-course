import React from "react";
import { Button } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const baseURL = "http://127.0.0.1:5000/binder/";

const AddCard = ({ pokemonName }) => {
  const { user, isAuthenticated, loginWithRedirect, getAccessTokenSilently } =
    useAuth0();

  const [post, setPost] = React.useState({});
  let usernumID = user.ProfileUserID;

  async function createPost() {
    let token = await getAccessTokenSilently();

    axios
      .post(
        baseURL,

        {
          pokemon_id: pokemonName,
          user_id: usernumID,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        setPost(response.data);
      });
  }
  console.log(post);
  return (
    <div>
      {isAuthenticated && (
        <Button color="green" onClick={createPost}>
          Add Card
        </Button>
      )}
      {!isAuthenticated && (
        <Button color="red" onClick={() => loginWithRedirect()}>
          Login/Sign Up
        </Button>
      )}
    </div>
  );
};

export default AddCard;
