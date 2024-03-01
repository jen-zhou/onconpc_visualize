import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ flexGrow: 1 }}>
        <iframe
          title="onconpc"
          className="gradio"
          src="https://jenniferzhou33-onconpc-visualization.hf.space"
          frameborder="0"
          width="850"
          height="450"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
