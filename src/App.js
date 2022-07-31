import "./App.css";
import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserList from "./Pages/UserList";

import ProjectList from "./Pages/Projects/List";
import ProjectCreate from "./Pages/Projects/Create";
import ProjectView from "./Pages/Projects/View";
import ProjectEdit from "./Pages/Projects/Edit";

import CampaignList from "./Pages/Campaigns/List";
import CampaignCreate from "./Pages/Campaigns/Create";
import CampaignView from "./Pages/Campaigns/View";
import CampaignEdit from "./Pages/Campaigns/Edit";

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
        <Route
          path="/project/list"
          exact
          element={
            <Dashboard>
              <ProjectList />
            </Dashboard>
          }
        />
        <Route
          path="/project/create"
          exact
          element={
            <Dashboard>
              <ProjectCreate />
            </Dashboard>
          }
        />
        <Route
          path="/project/edit/:id"
          exact
          element={
            <Dashboard>
              <ProjectEdit />
            </Dashboard>
          }
        />
        <Route
          path="/project/:id"
          exact
          element={
            <Dashboard>
              <ProjectView />
            </Dashboard>
          }
        />
        <Route
          path="/campaign/list"
          exact
          element={
            <Dashboard>
              <CampaignList />
            </Dashboard>
          }
        />
        <Route
          path="/campaign/create"
          exact
          element={
            <Dashboard>
              <CampaignCreate />
            </Dashboard>
          }
        />
        <Route
          path="/campaign/edit/:id"
          exact
          element={
            <Dashboard>
              <CampaignEdit />
            </Dashboard>
          }
        />
        <Route
          path="/campaign/:id"
          exact
          element={
            <Dashboard>
              <CampaignView />
            </Dashboard>
          }
        />
      </Routes>
    </>
  );
}

export default App;
