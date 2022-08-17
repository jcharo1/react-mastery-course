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
      <div className="search-bar">
        <div className="ui segment" style={{ padding: "10px" }}>
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Pokemon Search</label>
              <input
                type="text"
                value={this.state.term}
                placeholder="Search..."
                onChange={this.onInputChange}
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SearchBar;
