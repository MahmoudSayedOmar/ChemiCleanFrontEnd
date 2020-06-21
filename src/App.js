import React from "react";
import ReactDOM from "react-dom";

import { Route, Switch } from "react-router-dom";
import { HomeScreen, WelcomeScreen } from "./screens";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={WelcomeScreen} />
        <Route path="/home" component={HomeScreen} />
      </Switch>
    </div>
  );
}

export default App;
