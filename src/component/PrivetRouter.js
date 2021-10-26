import React from "react";
import Loader from "react-loader-spinner";
import { Redirect, Route, useLocation } from "react-router";
import useAuth from "./Context/useAuth";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PrivetRouter = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    />
  );
};

export default PrivetRouter;
