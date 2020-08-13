import React from 'react';
import BasicInput from './sites/BasicInput'
import InfoDisplay from './sites/InfoDisplay'
import RegulonDBWeb from './sites/RegulonDB-web'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div style={{ paddingLeft: "30px" }}>
        <h1>RegulonDB UI-Components</h1>
        <Link to="/Input"><h2>BasicInput</h2></Link>
        <Link to="/Output"><h2>InfoDisplay</h2></Link>
        <Link to="/RegulonDB-web"><h2>RegulonDB-web</h2></Link>

        <Switch>
          <Route exact path="/BasicInput">
            <BasicInput />
          </Route>
          <Route exact path="/InfoDisplay">
            <InfoDisplay />
          </Route>
          <Route exact path="/RegulonDB-web">
            <RegulonDBWeb />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
