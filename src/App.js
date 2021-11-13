import "./App.css";
import Header from "./Components/Header";
import MusicPlayer from "./Components/MusicPlayer";
import Search from "./Components/Search";
import Browse from "./Screens/Browse";
import Home from "./Screens/Home";
import { WaveProvider } from "./WaveContext";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function App() {
  if ("paintWorklet" in CSS) {
    CSS.paintWorklet.addModule(
      "https://www.unpkg.com/css-houdini-squircle@0.1.3/squircle.min.js"
    );
  }
  return (
    <WaveProvider>
      <Router>
        <div className="app">
          <Header />
          <Search />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/discover">
              <Browse />
            </Route>
          </Switch>

          {/* <MusicPlayer /> */}
        </div>
      </Router>
    </WaveProvider>
  );
}

export default App;
