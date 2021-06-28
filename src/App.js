import React, { useEffect } from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { tokenAction } from "./actions/authAction";
import { decodeToken } from "react-jwt";
import Catalog from "./pages/Catalog";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const decoded = decodeToken(localStorage.getItem("token"));
    decoded && decoded.user && dispatch(tokenAction(decoded.user));
    user.isLogged ? history.push("/catalog") : history.push("/login");
    // eslint-disable-next-line
  }, [user.isLogged]);
  return (
    <>
      {user.isLogged ? (
        <Switch>
          <Route exact path="/">
            <Redirect to="/catalog" />
          </Route>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/catalog" component={Catalog} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login} />
        </Switch>
      )}
    </>
  );
}

export default App;
