import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import MyProfile from '../MyProfile/MyProfile';
import Templates from '../Templates/Templates';
import Home from '../Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
       <div className="page-container">
        <div className="content-wrap">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<MyProfile />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/orders" element={<Home />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
     
      
     </div>
      <Footer />
      </div>
    </main>
    
  );
}