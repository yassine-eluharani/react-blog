import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Create from './Create';
//surround the app component with router so all component of the app have access

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
