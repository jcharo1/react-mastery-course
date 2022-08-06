import React from "react";
import qs from "qs";
import { Route, Routes } from "react-router-dom";
import NavBar from "./nav-bar";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import DropDownMenu from "./DropDownMenu";
import axios from "axios";
import Profile from "./views/profile.js";

class App extends React.Component {
  state = { pokemon: [], optionSelected: [], term: "" };

  onSearchSubmit = async (term) => {
    const response = await axios.get("http://127.0.0.1:5000/binder", {
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
    console.table(this.state.optionSelected);
    return (
      <div
        className="ui container"
        style={{
          marginTop: "10px",
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" exact element={<Profile />} />
          {/* <Route path="/external-api" component={ExternalApi} /> */}
        </Routes>
        <SearchBar onTheSubmit={this.onSearchSubmit} />
        <DropDownMenu onFilterChange={this.onFilterChange} />
        <ImageList pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
