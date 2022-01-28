import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormTask from "./components/FormTask";
import ListTask from "./components/ListTask";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ListTask />} />
        <Route path={"/tasks/new"} element={<FormTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
