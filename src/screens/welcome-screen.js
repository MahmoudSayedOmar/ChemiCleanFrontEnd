import React, { Component } from "react";

import { WelcomeCard } from "../components";

class WelcomeContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <WelcomeCard history={this.props.history}></WelcomeCard>
      </div>
    );
  }
}
export const WelcomeScreen = WelcomeContainer;
