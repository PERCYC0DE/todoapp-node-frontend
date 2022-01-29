import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormTask from "./components/FormTask";
import ListTask from "./components/ListTask";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path={"/"} element={<ListTask />} />
          <Route path={"/tasks/new"} element={<FormTask />} />
          <Route path={"/tasks/:id/edit"} element={<FormTask />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
