import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </div>
  );
}

export default App;
