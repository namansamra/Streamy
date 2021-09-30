import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import Navbar from "./navbar";
import Home from "./Home";
import Login from "./login";
import CreateStream from "./createStream";
import SignUp from "./signup";
import MyStream from "./mystreams";
import ProtectedRoute from "./protectedroute";
import Player from "./player";
import FlashMessage from "./flash/flash";
import PlayerRoute from "./playerRoute";
import NotFound from "./error/notfound";

const App = (props) => {
  const flash = useSelector((state) => state.flash.text);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          {flash !== "" ? <FlashMessage /> : null}
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/live" exact component={CreateStream} />
          <Route path="/signup" exact component={SignUp} />
          <ProtectedRoute path="/mystream" exact component={MyStream} />
          <PlayerRoute path="/stream/:id" exact component={Player} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
