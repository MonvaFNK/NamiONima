
import NavBar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import UserId from './components/UserId/UserId';
import Contacto from './components/Main/Contacto/Contacto';
import UserInfo from './components/UserId/UserInfo';
import FormSection from './components/Form/Form';
import React,{ useEffect,useState } from 'react';



function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/User' element={<UserId />}></Route>
          <Route path='/User/:id' element={<UserInfo />}></Route>
          <Route path='/crea-tu-plan' element={<FormSection />}></Route>
        </Routes>
        <Contacto />
    </BrowserRouter>
  );
}

export default App;
