import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Users, Blog, Courses, Menu, Newsletter } from "../pages/admin";
import Auth from '../pages/admin/Auth/Auth';

import { AdminLayout } from "../";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                
            </Routes>

        </BrowserRouter>
    )
}