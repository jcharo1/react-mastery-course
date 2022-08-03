import React from "react";

import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import DropDownMenu from "./DropDownMenu";
import axios from "axios";

class App extends React.Component {
  state = { pokemon: [], optionSelected: [], term: "" };

  onSearchSubmit = async (term) => {
    const response = await axios.get("http://127.0.0.1:5000/binder");

    this.setState({ pokemon: response.data.pokemon });
    console.log(term);
  };
  onFilterChange = (optionSelected) => {
    this.setState({ optionSelected });
  };

  render() {
    console.log(this.state.optionSelected);
    return (
      <div
        className="ui container"
        style={{
          marginTop: "10px",
        }}
      >
        <SearchBar onTheSubmit={this.onSearchSubmit} />
        <DropDownMenu onFilterChange={this.onFilterChange} />
        <ImageList pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
