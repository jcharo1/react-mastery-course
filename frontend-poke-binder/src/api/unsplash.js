import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:5000/",
  //   baseURL: "https://api.unsplash.com",
  //   headers: {
  //     Authorization: "Client-ID OYM4PF6Cp-ONQ-p_Z3m8xBKGdWkfQCDvrgSXafWov4Q",
  //   },
});
