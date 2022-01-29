import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';


import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './Components/ViewEmployeeComponent';

function App() {
  return (
    <div>
    <Router>
   
        <div className="container">
          <HeaderComponent/>
            <div className="container">
              {/* <switch>
              <switch> */}
              <Routes>
              
              <Route path="/" exact element={<ListEmployeeComponent />}></Route>
              <Route path="/employees" element={<ListEmployeeComponent/>} ></Route>
              <Route path="/addemployee"  element={<CreateEmployeeComponent/>}   ></Route>
              <Route path="/updateemployee/:id" element={<UpdateEmployeeComponent/>}></Route>
              <Route path="/viewemployee/:id" element={<ViewEmployeeComponent/>}></Route>


              
              </Routes> 
                 {/* <ListEmployeeComponent/>  */}
                {/* </switch>
              </switch> */}
            </div>
          <FooterComponent/>
        </div>
    
     </Router>
    </div>
  );
}

export default App;
