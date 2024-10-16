import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PortalComponent } from './components/portals/portalCompo';
import Comp0 from "./Comp0";
import Comp1 from "./Comp1";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

 export const ToastContext = createContext({});
function App() {
  const [isShow, setShow] = useState(false)
 
  return (
    <div className="App">
      <ToastContainer
      />
      <ToastContext.Provider value={{ setShow, isShow }}>
        <Router>
          <Routes>
            {/* <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route> */}
            <Route path="/" element={<Comp0 />} />
            <Route path="/1" element={<Comp1 />} />
            <Route path="/2" element={<h1>Hello 2</h1>} />
          </Routes>
        </Router>
        <PortalComponent  />
      </ToastContext.Provider>
    </div>
  );
}

export default App;
