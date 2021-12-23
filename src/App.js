import logo from './logo.svg';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Studentlist from './Studentlist';
import Addattendance from './Addattendance';
import Attendancelist from './Attendancelist';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from 'react-router-dom';
import { UserProvider } from './usercontext';

function App() {
  return (
    
    <div id="wrapper">
      <BrowserRouter>
      <UserProvider>
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
           <div id="content">
              <Topbar />
              <div class="container-fluid">
                <Routes>
                      <Route exact path="/" element={<Dashboard />}></Route>
                      <Route exact path="/student-list" element={<Studentlist />}></Route>
                      <Route exact path="/student/:id" element={<Attendancelist />}></Route> 
                      <Route exact path="/add-attendance/:id" element={<Addattendance />}></Route>
                </Routes>
                 
              </div>
           </div>
       </div>
         </UserProvider>
       </BrowserRouter>
    </div>
    
  );
}

export default App;
