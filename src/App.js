
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import HomeScreen from './screen/HomeScreen';
import ModulesScreen from './screen/ModulesScreen';
import InstructorScreen from './screen/InstructorScreen';

function App() {
  //I have used the routing for moving into another page.
  //we could do it with simple project too
  //routing makes the codemore clean
  //the page is not responsive , you have to give me the screen acc. to which I could but I better thought that i have to work that after
  return (
    <div className="App">
      <Router>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          {/* defining the path for module screen */}
          <Route path="/modules">
            <ModulesScreen />
          </Route>
          {/* defining the path for InstructorScreen*/}
          <Route path="/instructor">
            <InstructorScreen />
          </Route>
          {/* defining the path for Homescreen*/}
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
