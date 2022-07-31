import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <div className="ui floating dropdown labeled icon button">
        <input type="hidden" name="filters" />
        <i className="filter icon"></i>
        <span className="text">Filter</span>
        <div className="menu">
          <div className="ui icon search input">
            <input type="text" placeholder="Search filters..." />
          </div>
          <div className="divider"></div>
          <div className="header">
            <i className="tags icon"></i>
            Tag label
          </div>
          <div className="scrolling menu">
            <div className="item" data-value="important">
              <div className="ui red empty circular label"></div>
              Important
            </div>
            <div className="item" data-value="announcement">
              <div className="ui blue empty circular label"></div>
              Important
            </div>
            <div className="item" data-value="enchancement">
              <div className="ui green empty circular label"></div>
              Important
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
