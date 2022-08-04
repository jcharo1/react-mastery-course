import { components } from "react-select";
import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { colourOptions } from "./data.ts";

// const Option = (props) => {
//   return (
//     <div>
//       <components.Option {...props}>
//         <input
//           type="checkbox"
//           checked={props.isSelected}
//           onChange={() => null}
//         />{" "}
//         <label>{props.label}</label>
//       </components.Option>
//     </div>
//   );
// };

class DropDownMenu extends React.Component {
  state = { optionSelected: [] };

  handleChange = (selected) => {
    this.setState({
      optionSelected: selected,
    });

    // console.log(this.state.optionSelected);

    this.props.onFilterChange(selected);
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
        onChange={this.handleChange}
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