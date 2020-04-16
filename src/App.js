import React from 'react';
import BasicInput from './sites/BasicInput'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div style={{paddingLeft: "30px"}}>
      <h1>RegulonDB UI-Components</h1>
      <Link to="/BasicInput"><h2>BasicInput</h2></Link>
      <Link to="/InfoDisplay"><h2>InfoDisplay</h2></Link>
      <Link to="/RegulonDB-webComponents"><h2>RegulonDB-webComponents</h2></Link>
      
      <Switch>
      <Route exact path="/BasicInput">
            <BasicInput />
          </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
