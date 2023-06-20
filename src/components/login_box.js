import React, { useState } from 'react';
import '../styles/Login_screen_style.css';
import { useNavigate  } from 'react-router-dom';
import TextBox from "./textBox";

const Login_box = ({onSwitchScreen}) => {
    const [activeSection, setActiveSection] = useState('section1');
    const navigator = useNavigate ();

    // this handles the click on a section and prevents closing all tabs leaving one open constantly
    const handleSectionClick = (section) => {
        if (activeSection === section)
            return;
        setActiveSection(section);
    };

    // returns true if the passed section is the active section
    const isSectionActive = (section) => {
        return activeSection === section;
    };

    const log_in = () => {
        // here we check if the user exists
        // some login logic
        // here we get the user from the database
        set_session_cookie()
        navigator("/home_screen")
    }


    // TODO: improve these two below
    const set_session_cookie = () => { document.cookie = 'Clock_sign_in_valid ; path=/'; }
    const already_signed_in_this_session = () => {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.startsWith("Clock_sign_in_valid"))
                return true
        }
        return false;
    }

    if (already_signed_in_this_session()){
        navigator("/home_screen")
    }

    return (
        <div className="main_box" id="login_main">
            <div
                className={`section ${isSectionActive('section1') ? 'active' : ''}`}
                onClick={() => handleSectionClick('section1')}
            >
                <p>Login</p>
                    {isSectionActive('section1') && (
                        <>
                            <a>Username</a>
                            <TextBox type="username" placeholder="Username"/>
                            <a>Password</a>
                            <TextBox type="password" placeholder="Password"/>
                            <button onClick={log_in}>Login</button>
                            <div id="buttons">
                                <div className="sign_with" id="google_login"/>
                                <div className="sign_with" id="apple_login"/>
                            </div>
                        </>
                    )}
            </div>

            <div
                className={`section ${isSectionActive('section2') ? 'active' : ''}`}
                onClick={() => handleSectionClick('section2')}
            >
                <p>sign-up</p>
                {isSectionActive('section2') && (
                    <>
                        <a>Username</a>
                        <TextBox type="username" placeholder="Username"/>
                        <a>Password</a>
                        <TextBox type="password" placeholder="Password"/>
                        <a>Confirm password</a>
                        <TextBox type="password" placeholder="Confirm password"/>
                        <a>E-mail</a>
                        <TextBox type="email" placeholder="E-mail"/>
                        <a>Phone-number</a>
                        <TextBox type="phone" placeholder="Phone number"/>
                        <button onClick={() => handleSectionClick('section1')}>Sign-up</button>
                    </>
                )}
            </div>

            <div
                className={`section ${isSectionActive('section3') ? 'active' : ''}`}
                onClick={() => handleSectionClick('section3')}
            >
                <p>forgot password</p>
                {isSectionActive('section3') && (
                    <>
                        <a>E-mail</a>
                        <TextBox type="phone" placeholder="E-mail"/>
                        <button onClick={() => handleSectionClick('section1')}>Reset my password</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login_box;