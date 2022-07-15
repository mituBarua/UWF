import './App.css';
// import { Switch, Route, useLocation } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import AdminDashboard from './Pages/AdminDashboard';
function App() {
  return (
    <>
    <AdminDashboard/>
      {/* <Switch>
        <Route path="/" element={<AdminDashboard />} />
      </Switch> */}

    </>
  );
}

export default App;
