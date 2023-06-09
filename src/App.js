import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
import Sidebar from './components/SideBar/Sidebar.js';
import Navbar from './components/NavBar/Navbar.js';
import Login from './components/Login/Login.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import UserList from './components/UserList/U/UserList.js';
import './assets/css/admin.css';
import './assets/css/animate.css';
import './assets/css/home_style.css';
import './assets/css/style.css';
import './assets/css/style1.css';





function App() {
  const logged = true;
  return (
    <div className="App">
      <BrowserRouter>
        {logged ? (
          <>
            <Navbar />
            <div className="screens-container">
              <Sidebar />
              <div className='screens-section-container'>
                <Routes>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/user-list' element={<UserList />} />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
