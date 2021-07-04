import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { tokenAction } from "./actions/authAction";
import { decodeToken } from "react-jwt";
import Catalog from "./pages/Catalog";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Items from "./pages/Items";

function App() {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const decoded = decodeToken(localStorage.getItem("token"));
    decoded && decoded.user && dispatch(tokenAction(decoded.user));
    user.isLogged && user.redirect && history.push("/catalog");
    !user.isLogged && !decoded && history.push("/login");
    setLoading(false);
    // eslint-disable-next-line
  }, [user.isLogged]);

  if (loading) return null;
  return (
    <>
      {user.isLogged ? (
        <Switch>
          <Route exact path="/">
            <Redirect to="/catalog" />
          </Route>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/items" component={Items} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      )}
    </>
  );
}

export default App;
