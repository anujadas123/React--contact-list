import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
