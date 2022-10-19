import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.css";

import ProtectedRoute from "./Routes/ProtectedRoute";

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
import CampaignParagraphList from "./Pages/Campaigns/Paragraph/List";
import CampaignMediaList from "./Pages/Campaigns/Media/List";
import CampaignParagraphEdit from "./Pages/Campaigns/Paragraph/Edit";

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
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <h2>Welcome to Dashboard!</h2>
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route
          path="/user/list"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <UserList />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/project/list"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <ProjectList />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/project/create"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <ProjectCreate />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/project/edit/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <ProjectEdit />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/project/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <ProjectView />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/appeal/list"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <AppealList />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/appeal/create"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <AppealCreate />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/appeal/edit/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <AppealEdit />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/appeal/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <AppealView />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/news/list"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <NewsList />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/news/create"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <NewsCreate />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/news/edit/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <NewsEdit />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/news/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <NewsView />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/campaign/list"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <CampaignList />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/campaign/paragraph/list/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <CampaignParagraphList />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/campaign/paragraph/edit/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <CampaignParagraphEdit />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/campaign/media/list/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <CampaignMediaList />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/campaign/create"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <CampaignCreate />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/campaign/edit/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <CampaignEdit />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/campaign/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <CampaignView />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/volunteer/list"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <VolunteerList />
              </Dashboard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/volunteer/edit/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <VolunteerEdit />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/volunteer/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <VolunteerView />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<>Page Not found</>} />
      </Routes>
    </>
  );
}

export default App;
