import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import Pokedex from "./containers/Pokedex";
import AppNavigator from "./Components/AppNavigator";

export default function App() {
  return (
    <Router>
      <AppNavigator />
      <Route path="/" component={Pokedex} />
    </Router>
  );
}
