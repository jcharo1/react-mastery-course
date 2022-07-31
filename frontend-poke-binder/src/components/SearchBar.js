import React from "react";
import "./SearchBar.css";
import Filter from "./Filter";
class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar">
        <div className="ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Pokemon Search</label>
              <input
                type="text"
                value={this.state.term}
                placeholder="Search..."
                onChange={(e) => this.setState({ term: e.target.value })}
                style={{
                  height: "50%",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right",

                  backgroundColor: "transparent",
                  //   backgroundImage:
                  //     "url('https://media4.giphy.com/media/3s2O1gbk6JNRK/giphy.gif?cid=ecf05e47kj3zlfclcmcmisv7kzuhbzur97twqe7zsaiqxl1t&rid=giphy.gif&ct=s')",
                }}
              />
            </div>
            {/* <Filter /> */}
          </form>
        </div>
      </div>
    );
  }
}
export default SearchBar;
