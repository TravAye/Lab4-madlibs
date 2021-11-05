import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import HomeRoute from "./components/HomeRoute";
import ViewStoryRoute from "./components/ViewStoryRoute";
import CreateStoryRoute from "./components/CreateStoryRoute";
import ListStoriesRoute from "./components/ListStoriesRoute";
import { stories } from "./services/StorriesArray";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomeRoute />
          </Route>
          <Route path="/stories" exact>
            <ListStoriesRoute stories={stories} />
          </Route>
          <Route path="/stories/:id" exact>
            <ViewStoryRoute />
          </Route>
          <Route path="/create-story" exact>
            <CreateStoryRoute />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
