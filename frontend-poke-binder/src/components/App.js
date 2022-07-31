import React from "react";

import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Filter from "./Filter";
import axios from "axios";

class App extends React.Component {
  state = { pokemon: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get("http://127.0.0.1:5000/binder");
    console.log(this);
    this.setState({ pokemon: response.data.pokemon });
  };

  render() {
    return (
      <div
        className="ui container"
        style={{
          marginTop: "10px",
        }}
      >
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Filter />
        <ImageList pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
