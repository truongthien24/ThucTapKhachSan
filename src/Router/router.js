import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout1 } from '../page/user/layout/Layout1';
import { HomeUser } from '../page/user/page/home/Home';
import { Login } from '../page/user/page/login/Login';
import { InfoRoom } from '../page/user/page/infoRoom/InfoRoom';
import { Layout1Admin } from '../page/admin/layout/Layout1Admin';


export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/user" element={<Layout1/>}>
                <Route index element={<HomeUser/>}/>  
                <Route path="login" element={<Login/>}/>
                <Route path="infoRoom/:id" element={<InfoRoom/>}/>   
            </Route>
            <Route path="/admin" element={<Layout1Admin/>}>

            </Route>
        </Routes>
    </div>
  )
}
