import { components } from "react-select";
import React from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";

import { colourOptions } from "./data.ts";
const customStyles = {
  control: (base, state) => ({
    ...base,
    margin: "0px 80px",
    borderRadius: state.isFocused ? "16px" : 16,
    borderColor: state.isFocused ? "yellow" : "transparent",
    background: "rgba(255, 255, 255, 0.59)",

    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      borderColor: state.isFocused ? "yellow" : "yellow",
    },
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 20,
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,

    padding: 0,
  }),
  multiValue: (styles, { data }) => {
    return { ...styles, backgroundColor: data.color };
  },
  option: (styles, { data }) => {
    return { ...styles, color: "#000000" };
  },
};
const animatedComponents = makeAnimated();
class DropDownMenu extends React.Component {
  state = { optionSelected: [] };

  handleChange = (selected) => {
    console.log(selected);
    this.setState({
      optionSelected: selected,
    });

    this.props.onFilterChange(selected);
  };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTheSubmit(this.state.term);
  };
  render() {
    return (
      <Select
        options={colourOptions}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        // components={{
        //   Option,
        // }}
        styles={customStyles}
        onChange={this.handleChange}
        components={animatedComponents}
        allowSelectAll={true}
        value={this.state.optionSelected}
      />
    );
  }
}

export default DropDownMenu;

// <Select
//   className="filter-display"
//   closeMenuOnSelect={false}
//   components={animatedComponents}
//   // defaultValue={[colourOptions[4], colourOptions[5]]}
//   isMulti
//   options={colourOptions}
//   placeholder="Filter by Set"
// />;
