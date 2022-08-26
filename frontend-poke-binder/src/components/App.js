import React from "react";
import qs from "qs";

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
