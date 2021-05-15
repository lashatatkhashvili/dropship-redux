import { Route, Redirect, Switch } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/catalog" />
        </Route>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/catalog" component={Catalog} />
      </Switch>
    </>
  );
}

export default App;
