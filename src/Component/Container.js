import React, { Component } from "react";
import Card from "./Card";
import Profile from "./Profile";
import "./styles/container.css";
import data from "./data.json";
import ErrorBoundary from "./ErrorBoundary";
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Weekly",
      selectedItem: data.map((item) => item.timeframes.weekly),
    };
  }

  changeItem = (item) => {
    let value;
    if (item === "Weekly") value = data.map((item) => item.timeframes.weekly);
    else if (item === "Daily")
      value = data.map((item) => item.timeframes.daily);
    else value = data.map((item) => item.timeframes.monthly);
    this.setState({
      selected: item,
      selectedItem: value,
    });
  };

  render() {
    return (
      <div className="main-container">
        <div className="row1">
          <Profile
            selected={this.state.selected}
            changeItem={this.changeItem}
          />
        </div>
        <div className="row2">
          {data.map((item, index) => (
            <ErrorBoundary key={index}>
              <Card data={item} select={this.state.selectedItem.at(index)} />
            </ErrorBoundary>
          ))}
        </div>
      </div>
    );
  }
}

export default Container;
