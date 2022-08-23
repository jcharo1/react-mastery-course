import React from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
const getUserData = async (id, gaccestoken) => {
  const token = await gaccestoken();

  return await axios.get("http://127.0.0.1:5000/user/" + id, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default getUserData;
