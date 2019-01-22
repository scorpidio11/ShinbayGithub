import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./pages/Admin";
import Detail from "./pages/Detail";
import Print from "./pages/Print";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
  
        <Switch>
          <Route exact path="/" component={Admin} />
          <Route exact path="/shinbay" component={Admin} />
          {/* <Route exact path="/shinbay/:id" component={Detail} /> */}
          <Route exact path="/view" component={Detail} />
          <Route exact path="/print" component={Print} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
