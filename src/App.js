import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Teamcreation from './components/Teamcreation';
import Sidebar from './components/Sidebar';
import Viewplayer from './components/Viewplayer';

import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
   <>
   
    
  <Router>
    
    <Navbar title="EDGED" class="center"/>
    <div className="container my-3">
    <Routes>
           
            <Route exact path="/login" element={<Login />}>{/* Switches are replaced by Routes*/}
            </Route>
            <Route exact path="/signup" element={<Signup/>}>{/* Switches are replaced by Routes*/}
            </Route>
            
    </Routes>
    <br>
    </br>
    <Sidebar/>
    <Routes>
            <Route exact path="/teamcreation" element={<Teamcreation />}>{/* Switches are replaced by Routes*/}
            </Route>
            <Route exact path="/viewplayer" element={<Viewplayer />}>{/* Switches are replaced by Routes*/}
            </Route>
    </Routes>
    
    </div>
  </Router> 
   
   
   
   </>
  );
}

export default App;
