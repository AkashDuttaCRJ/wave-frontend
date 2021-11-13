import "./App.css";
import MusicPlayer from "./Components/MusicPlayer";

function App() {

  if ("paintWorklet" in CSS) {
    CSS.paintWorklet.addModule(
      "https://www.unpkg.com/css-houdini-squircle@0.1.3/squircle.min.js"
    );
  }

  return (
    <div className="app">
      <MusicPlayer />
    </div>
  );
}

export default App;
