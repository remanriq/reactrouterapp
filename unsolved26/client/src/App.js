
import React from "react";
import Books from "./pages/Books";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
//route for '/'//
//route for'/books/

const App = () =>
<Router>
  <div>
    <Nav />
    <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={books} />
        <Route
    <Books />
  </div>;

export default App;
