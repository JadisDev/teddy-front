import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Login } from "./pages/Login";
import { Client } from "./pages/Client";
import { ClientSelected } from "./pages/ClientSelected";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/client" element={<Client />} />
          <Route path="/client-selected" element={<ClientSelected />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
