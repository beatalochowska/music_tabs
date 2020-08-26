import React from "react";
import { MainPage } from "pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/music_tabs" component={MainPage} />
        <Route path="*" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
