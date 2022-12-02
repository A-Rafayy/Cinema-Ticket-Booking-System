import { Col, Row } from "antd";
import React from "react";
import "./AuthPage.css";
import LoginForm from "./LoginForm/LoginForm";
import SignupForm from "./SignupForm/SignupForm";

const AuthPage = ({children}) => {
    const pic = "https://w7.pngwing.com/pngs/62/873/png-transparent-computer-icons-hollywood-film-directory-art-movie-icon-miscellaneous-television-film-thumbnail.png";
    return (
        <Row className="AuthPage-R1">
            <Col md={12} className="AuthPage-R1-C1">
                <div className="AuthPage-R1-C1-div1">
                    <img className="AuthPage-image" src={pic} alt="pic" />
                </div>
            </Col>
            <Col md={12} className="AuthPage-R1-C2">
                {/* <LoginForm /> */}
                {/* <SignupForm /> */}
                {children}
            </Col>
        </Row>
    );
};

export default AuthPage;
