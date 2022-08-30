import React from "react";
import qs from "qs";
import "./SearchBar.css";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import DropDownMenu from "./DropDownMenu";
import axios from "axios";

class App extends React.Component {
  state = { pokemon: [], optionSelected: [], term: "" };

  onSearchSubmit = async (term) => {
    const response = await axios.get("http://127.0.0.1:5000/binder/", {
      params: { name: term, set: this.state.optionSelected },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    });

    this.setState({ pokemon: response.data.pokemon });
  };
  onFilterChange = (optionSelected) => {
    this.setState({ optionSelected });
  };

  render() {
    return (
      <div
        className="ui container"
        style={{
          fontFamily: "pokemon_gbregular",
          color: "black",
          background: "rgba(255, 255, 255, 0.59)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <SearchBar
          onFilterChange={this.onFilterChange}
          onTheSubmit={this.onSearchSubmit}
        />
        <DropDownMenu onFilterChange={this.onFilterChange} />
        <ImageList pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
