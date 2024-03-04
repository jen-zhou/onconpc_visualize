import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Gradio from "./Gradio";
import Tutorial from "./Tutorial";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/onconpc_visualize/prediction" element={<Gradio/>} />
          <Route path="/onconpc_visualize/tutorial" element={<Tutorial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
