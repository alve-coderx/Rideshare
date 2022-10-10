import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextProvider from "./Context/Provider";
import Layout from "./Layout/Layout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TextProvider>
          <Layout />
        </TextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
