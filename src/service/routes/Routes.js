import React from "react";
import { Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import FindMedia from "../../pages/find-media/FindMedia";
import RegisterMedia from "../../pages/register-media/RegisterMedia";

const Routes = () => {
  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Home />
    },
    {
      path: "/register-media",
      main: () => <RegisterMedia />
    },
    {
      path: "/find",
      main: () => <FindMedia />
    }
  ];

  return routes.map(route => (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      component={route.main}
    />
  ));
};

export default Routes;
