
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem("token");
    console.log("anchortoken",token);
    function Logout () {
        localStorage.removeItem("token");
        alert('You are logout');
        navigate("/login");
    }

    return (
        <header className="NewNavbar_nav_cont_dark__jxRzF head" style={{ display: "flex" }}>
            <nav className="NewNavbar_nav_block__Kt2BG">
                <div>
                    <a className="imgLink" href="/">
                        <img alt="logo" loading="lazy" width="80" height="70" decoding="async" data-nimg="1"
                            style={{ color: "transparent", marginTop: "8px", paddingTop: "2px" }}
                            srcSet="2Fnav_logo.e5fb945a.png"
                            src="2Fnav_logo.e5fb945a.png" />
                    </a>
                </div>
                <div className="nav__menu-bar" onClick={() => setIsOpen(!isOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="nav__menu-list">
                    <div>
                        <a className="nav__link" target="_blank" style={{ color: "black" }}
                            href="/" rel="noreferrer">MakeMyWeb.</a>
                    </div>
                    <div>
                        <a className="nav__link active" style={{ color: "black" }} href="/signup">Signup</a>
                    </div>
                    <div>
                        <a className="nav__link" style={{ color: "black" }} href="/login">LOGIN</a>
                    </div>
                    <div>
                        <a className="nav__link" style={{ color: "black" }} href={token ? "/allemployees" : "/login"}>employees</a>
                    </div>
                    <div>
                        <a className="nav__link" style={{ color: "black" }} onClick={Logout}>Logout</a>
                    </div>
                    <button className="themeBtn" style={{ display: "flex" }}>
                        <span></span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;