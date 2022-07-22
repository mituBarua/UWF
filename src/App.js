import "./App.css";
import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserList from "./Pages/UserList";

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
        <Route path="/register" exact element={<Register />} />
        <Route
          path="/user/list"
          exact
          element={
            <Dashboard>
              <UserList />
            </Dashboard>
          }
        />
      </Routes>
    </>
  );
}

export default App;
