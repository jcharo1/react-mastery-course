import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTheSubmit(this.state.term);
  };
  render() {
    return (
      <div className="" style={{ padding: "10px" }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Pokemon Search</label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Search..."
              onChange={this.onInputChange}
              style={{
                fontFamily: "pokemon_gbregular",
                color: "black",
                background: "rgba(255, 255, 255, 0.59)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
