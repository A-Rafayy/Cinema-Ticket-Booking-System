import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import { pageRoutes } from "./PageRoutes";
import AuthPage from "../components/AuthPage/AuthPage";
import LoginForm from "../components/AuthPage/LoginForm/LoginForm";
import SignupForm from "../components/AuthPage/SignupForm/SignupForm";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import BookingScreen from "../components/BookingScreen/BookingScreen";
import UserInfo from "../components/UserInfo/UserInfo";

const RouteHandler = () => {
    return (
        <Router>
            <Routes>
                {/* Auth Routes */}
                <Route exact path={pageRoutes.login} element={<AuthPage children={<LoginForm />} />} />
                <Route exact path={pageRoutes.signup} element={<AuthPage children={<SignupForm />} />} />

                <Route exact path={pageRoutes.home} element={<HomeScreen />} />
                <Route exact path={pageRoutes.bookingScreen} element={<BookingScreen />} />
                <Route exact path={pageRoutes.userInfo} element ={<UserInfo />} />
            </Routes>
        </Router>
    )
}

export default RouteHandler