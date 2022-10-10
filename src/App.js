import "./App.css";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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

import AppealList from "./Pages/Appeal/List";
import AppealCreate from "./Pages/Appeal/Create";
import AppealView from "./Pages/Appeal/View";
import AppealEdit from "./Pages/Appeal/Edit";
import NewsList from "./Pages/News/List";
import NewsCreate from "./Pages/News/Create";
import NewsView from "./Pages/News/View";
import NewsEdit from "./Pages/News/Edit";
import LandingPage from "./Pages/LandingPage";

import VolunteerList from "./Pages/Volunteers/List";
import VolunteerView from "./Pages/Volunteers/View";
import VolunteerEdit from "./Pages/Volunteers/Edit";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" exact element={<LandingPage />} />
        <Route
          path="/dashboard"
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
          path="/appeal/list"
          exact
          element={
            <Dashboard>
              <AppealList />
            </Dashboard>
          }
        />
        <Route
          path="/appeal/create"
          exact
          element={
            <Dashboard>
              <AppealCreate />
            </Dashboard>
          }
        />
        <Route
          path="/appeal/edit/:id"
          exact
          element={
            <Dashboard>
              <AppealEdit />
            </Dashboard>
          }
        />
        <Route
          path="/appeal/:id"
          exact
          element={
            <Dashboard>
              <AppealView />
            </Dashboard>
          }
        />
        <Route
          path="/news/list"
          exact
          element={
            <Dashboard>
              <NewsList />
            </Dashboard>
          }
        />
        <Route
          path="/news/create"
          exact
          element={
            <Dashboard>
              <NewsCreate />
            </Dashboard>
          }
        />
        <Route
          path="/news/edit/:id"
          exact
          element={
            <Dashboard>
              <NewsEdit />
            </Dashboard>
          }
        />
        <Route
          path="/news/:id"
          exact
          element={
            <Dashboard>
              <NewsView />
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
           <Route
          path="/volunteer/list"
          exact
          element={
            <Dashboard>
              <VolunteerList />
            </Dashboard>
          }
        />
       
        <Route
          path="/volunteer/edit/:id"
          exact
          element={
            <Dashboard>
              <VolunteerEdit />
            </Dashboard>
          }
        />
        <Route
          path="/volunteer/:id"
          exact
          element={
            <Dashboard>
              <VolunteerView />
            </Dashboard>
          }
        />
      </Routes>
    </>
  );
}

export default App;
