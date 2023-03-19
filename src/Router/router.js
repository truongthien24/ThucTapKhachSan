import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout1 } from '../page/user/layout/Layout1';
import { HomeUser } from '../page/user/page/home/Home';
import { Login } from '../page/user/page/login/Login';
import { InfoRoom } from '../page/user/page/infoRoom/InfoRoom';
import { BookingSchedule } from '../page/user/page/bookingSchedule/BookingSchedule';
import { Layout1Admin } from '../page/admin/layout/Layout1Admin';
import { MoreRoom } from '../page/user/page/moreRoom/MoreRoom';
import { Register } from '../page/user/page/register/Register';
import { Welcome } from '../page/welcome/Welcome';


export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/user" element={<Layout1/>}>
                <Route index element={<HomeUser/>}/>  
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="infoRoom/:id" element={<InfoRoom/>}/>   
                <Route path="bookingSchedule" element={<BookingSchedule/>}/>   
                <Route path="searchRoom" element={<MoreRoom/>}/>   
            </Route>
            <Route path="/admin" element={<Layout1Admin/>}>

            </Route>
        </Routes>
    </div>
  )
}
