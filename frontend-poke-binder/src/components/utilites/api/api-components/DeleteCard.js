import React from "react";
import { Button } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const baseURL = "http://127.0.0.1:5000/binder/";

const DeleteCard = ({ pokemonName, onCall }) => {
  const { user, isAuthenticated, loginWithRedirect, getAccessTokenSilently } =
    useAuth0();

  const [deleted, setDeleted] = React.useState({});
  let usernumID = user.ProfileUserID;

  async function createDelete() {
    let token = await getAccessTokenSilently();

    axios
      .delete(baseURL, {
        headers: { Authorization: `Bearer ${token}` },

        data: {
          pokemon_id: pokemonName,
          user_id: usernumID,
        },
      })
      .then((response) => {
        setDeleted(response.data);
        onCall(response.data);
      });
  }

  return (
    <div>
      {isAuthenticated && (
        <button className="button-modal-del" onClick={createDelete}></button>
      )}
    </div>
  );
};

export default DeleteCard;
