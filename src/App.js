import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import Dashboard from './Components/Dashboard';



function App() {
  return (
    <>

      <Routes>
        <Route path="/" exact element={<Dashboard>
          <h2>Welcome to Dashboard!</h2>
        </Dashboard>} />
      </Routes>

    </>
  );
}

export default App;
