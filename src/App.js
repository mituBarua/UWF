import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.css";

import ProtectedRoute from "./Routes/ProtectedRoute";

import Dashboard from "./Components/Dashboard";
import Login from "./Pages/Auth/Login";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Register from "./Pages/Auth/Register";
import UserList from "./Pages/UserList";
import Contact from "./Pages/SubPage/ContactPage";
import ProjectList from "./Pages/Projects/List";
import ProjectCreate from "./Pages/Projects/Create";
import ProjectView from "./Pages/Projects/View";
import ProjectEdit from "./Pages/Projects/Edit";
import ProjectPage from "./Pages/SubPage/ProjectPage";
import ProjectParagraphList from "./Pages/Projects/Paragraph/List";
import ProjectMediaList from "./Pages/Projects/Media/List";
import ProjectParagraphEdit from "./Pages/Projects/Paragraph/Edit";

import CampaignList from "./Pages/Campaigns/List";
import CampaignCreate from "./Pages/Campaigns/Create";
import CampaignView from "./Pages/Campaigns/View";
import CampaignEdit from "./Pages/Campaigns/Edit";
import CampaignParagraphList from "./Pages/Campaigns/Paragraph/List";
import CampaignMediaList from "./Pages/Campaigns/Media/List";
import CampaignParagraphEdit from "./Pages/Campaigns/Paragraph/Edit";
import CampaignDetails from "./Pages/SubPage/CampaignDetailPage";
import CampaignPage from "./Pages/SubPage/CampaignPage";

import AppealList from "./Pages/Appeal/List";
import AppealCreate from "./Pages/Appeal/Create";
import AppealView from "./Pages/Appeal/View";
import AppealEdit from "./Pages/Appeal/Edit";
import AppealParagraphList from "./Pages/Appeal/Paragraph/List";
import AppealMediaList from "./Pages/Appeal/Media/List";
import AppealParagraphEdit from "./Pages/Appeal/Paragraph/Edit";
import AppealPage from "./Pages/SubPage/AppealPage";
import AppealDetails from "./Pages/SubPage/AppealDetailPage";

import NewsList from "./Pages/News/List";
import NewsCreate from "./Pages/News/Create";
import NewsView from "./Pages/News/View";
import NewsEdit from "./Pages/News/Edit";
import NewsParagraphList from "./Pages/News/Paragraph/List";
import NewsMediaList from "./Pages/News/Media/List";
import NewsParagraphEdit from "./Pages/News/Paragraph/Edit";
import NewsDetails from "./Pages/SubPage/NewsDetailPage";
import NewsPage from "./Pages/SubPage/NewsPage";
import ProjectDetails from "./Pages/SubPage/ProjectDetailPage";
import LandingPage from "./Pages/LandingPage";

import VolunteerCreate from "./Pages/Volunteers/Create";
import VolunteerList from "./Pages/Volunteers/List";
import VolunteerView from "./Pages/Volunteers/View";
import VolunteerEdit from "./Pages/Volunteers/Edit";
import Volunteer from "./Pages/SubPage/VolunteerPage";

function App() {
  // disable right click
  // window.addEventListener("contextmenu", (e) => e.preventDefault());
  // window.addEventListener("keydown", (e) => {
  //   if (e.keyCode == 123) e.preventDefault();
  //   if (e.ctrlKey && e.shiftKey && e.keyCode === 73) e.preventDefault();
  //   if (e.ctrlKey && e.shiftKey && e.keyCode === 74) e.preventDefault();
  // });
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
        <Route path="/forgetPassword" exact element={<ForgetPassword />} />
        <Route path="/resetPassword" exact element={<ResetPassword />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/volunteer" exact element={<Volunteer />} />
        <Route path="/projects" exact element={<ProjectPage />} />
        <Route path="/appeals" exact element={<AppealPage />} />
        <Route path="/appeal-details/:id" exact element={<AppealDetails />} />
        <Route path="/campaign" exact element={<CampaignPage />} />
        <Route
          path="/campaign-details/:id"
          exact
          element={<CampaignDetails />}
        />
        <Route path="/news" exact element={<NewsPage />} />
        <Route path="/news-details/:id" exact element={<NewsDetails />} />
        <Route path="/project-details/:id" exact element={<ProjectDetails />} />
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
          path="/project/paragraph/list/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <ProjectParagraphList />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/project/paragraph/edit/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <ProjectParagraphEdit />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/project/media/list/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <ProjectMediaList />
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
          path="/appeal/paragraph/list/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <AppealParagraphList />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/appeal/paragraph/edit/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <AppealParagraphEdit />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/appeal/media/list/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <AppealMediaList />
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
          path="/news/paragraph/list/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <NewsParagraphList />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/news/paragraph/edit/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <NewsParagraphEdit />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/news/media/list/:id"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <NewsMediaList />
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
          path="/volunteer/create"
          exact
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard>
                <VolunteerCreate />
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
