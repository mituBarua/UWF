import "./App.css";
import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Dashboard>
              <h2>Welcome to Dashboard!</h2>
            </Dashboard>
          }
        />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
