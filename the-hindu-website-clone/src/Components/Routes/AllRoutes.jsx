import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../Home/Home';
import SignupMain from '../Register_Login/SignupMain';
import LoginMain from '../Register_Login/LoginMain';


const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/signup" element={<SignupMain/>}></Route>
            <Route exact path="/login" element={<LoginMain/>}></Route>
        </Routes>
    );
}

export default AllRoutes;
