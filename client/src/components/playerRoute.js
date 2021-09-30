import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";
const PlayerRoute = ({ component: Component, ...rest }) => {
  const [loader, setLoader] = useState(true);
  const stream = useSelector((state) => state.stream.stream);
  const streamFound = useSelector((state) => state.stream.streamFound);
  useEffect(() => {
    // setLoader(false);
    console.log(streamFound);
    if (stream.length > 0 || streamFound === false) setLoader(false);
    //set loader false
  }, [stream, streamFound]);
  if (loader)
    return (
      <Spinner
        animation="border"
        style={{ position: "absolute", top: "50%", left: "50%" }}
      />
    );
  if (loader === false)
    return (
      <Route
        {...rest}
        render={(props) => {
          // console.log(props)
          // console.log(stream)
          const st = stream.find(
            (s) => s.key === props.location.pathname.substr(8)
          );
          // console.log(st)
          if (st !== undefined) {
            return <Component {...props} stream={st} />;
          } else return <Redirect to="/error" />;
        }}
      />
    );
};

export default PlayerRoute;
