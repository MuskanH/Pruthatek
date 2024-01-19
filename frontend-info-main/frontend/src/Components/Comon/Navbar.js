import React, { useEffect } from 'react';
import './NAvbar.css'
import { AiFillCaretDown } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom';

function Navbar(props) {
    useEffect(() => {
        window.scroll(() => {
            if (window.screenTop >= 300) {
                document.querySelector(".navi").classList.toggle(".stick-it")
            }
        })
    })
    const visible = (e) => {
        console.log("clicked");
        console.log(e);
        console.log(document.querySelector(".navbar-ul"));
        document.querySelector(".navbar-ul").classList.toggle("navbar-ul-second")
    }
    return (
        <div className="blog-navbar">
            <h2>LOGO</h2>
            <div className="navbar-menu">
                <div className="navbar-ul">
                    <p className="main-menu-div">Reviews
                        {/* <div className="sub-menu-div">
                            <p className="inside-title">All reviews</p>
                            <div className="links">
                                <div>
                                    <p>Item link 1</p>
                                    <p>Item link 2</p>
                                    <p>Item link 3</p>
                                    <p>Item link 4</p>
                                    <p>Item link 5</p>
                                    <p>Item link 6</p>
                                    <p>Item link 7</p>
                                    <p>Item link 8</p>
                                </div>
                                <div>
                                    <p>Item link 5</p>
                                    <p>Item link 6</p>
                                    <p>Item link 7</p>
                                    <p>Item link 8</p>
                                </div>
                            </div>
                        </div> */}
                    </p>
                    <p className="main-menu-div">Cars<AiFillCaretDown />
                        <div className="sub-menu-div">
                            <p className="inside-title">All Cars</p>
                            <p>IT 1</p>
                            <p>IT 2</p>
                            <p>IT 3</p>
                            <p>IT 4</p>
                        </div>
                    </p>
                    <p className="main-menu-div">News<AiFillCaretDown />
                        <div className="sub-menu-div">
                            <p className="inside-title">All News</p>
                            <p>IT 1</p>
                            <p>IT 2</p>
                            <p>IT 3</p>
                            <p>IT 4</p>
                        </div>
                    </p>
                    <p className="main-menu-div">Tech<AiFillCaretDown />
                        <div className="sub-menu-div">
                            <p className="inside-title">All Tech</p>
                            <p>IT 1</p>
                            <p>IT 2</p>
                            <p>IT 3</p>
                            <p>IT 4</p>
                        </div>
                    </p>
                    <p className="main-menu-div">Money<AiFillCaretDown />
                        <div className="sub-menu-div">
                            <p className="inside-title">All Money</p>
                            <p>IT 1</p>
                            <p>IT 2</p>
                            <p>IT 3</p>
                            <p>IT 4</p>
                        </div>
                    </p>
                    {/* <p className="main-menu-div">Reviews<AiFillCaretDown /></p>
                    <p className="main-menu-div">Reviews<AiFillCaretDown /></p>
                    <p className="main-menu-div">Reviews<AiFillCaretDown /></p>
                    <p className="main-menu-div">Reviews<AiFillCaretDown /></p> */}
                </div>
                {/* <ul className="navbar-ul">
                    <li className="main-menu">Reviews<AiFillCaretDown />
                        <div className="sub-menu">
                            <p>Reviews</p>
                            <ul>
                                <div>
                                    <li>IT 1</li>
                                    <li>IT 2</li>
                                    <li>IT 3</li>
                                    <li>IT 4</li>
                                    <li>IT 1</li>
                                    <li>IT 2</li>
                                    <li>IT 3</li>
                                    <li>IT 4</li>
                                </div>
                                <div>
                                    <li>IT 5</li>
                                    <li>IT 6</li>
                                    <li>IT 7</li>
                                    <li>IT 8</li>
                                </div>
                            </ul>
                        </div>
                    </li>
                    <li className="main-menu">News<AiFillCaretDown />
                        <div className="sub-menu">
                            <p>News</p>
                            <ul>
                                <div>
                                    <li>IT 1</li>
                                    <li>IT 2</li>
                                    <li>IT 3</li>
                                    <li>IT 4</li>
                                </div>
                            </ul>
                        </div></li>
                    <li className="main-menu">Tech<AiFillCaretDown />
                        <div className="sub-menu">
                            <p>News</p>
                            <ul>
                                <div>
                                    <li>IT 1</li>
                                    <li>IT 2</li>
                                    <li>IT 3</li>
                                    <li>IT 4</li>
                                </div>
                            </ul>
                        </div></li>
                    <li className="main-menu">Money<AiFillCaretDown />
                        <div className="sub-menu">
                            <p>News</p>
                            <ul>
                                <div>
                                    <li>IT 1</li>
                                    <li>IT 2</li>
                                    <li>IT 3</li>
                                    <li>IT 4</li>
                                    <li>IT 1</li>
                                    <li>IT 2</li>
                                    <li>IT 3</li>
                                    <li>IT 4</li>
                                </div>
                                <div>
                                    <li>IT 5</li>
                                    <li>IT 6</li>
                                    <li>IT 7</li>
                                    <li>IT 8</li>
                                </div>
                            </ul>
                        </div></li>
                    <li className="main-menu">Wellness<AiFillCaretDown />
                        <div className="sub-menu">
                            <p>News</p>
                            <ul>
                                <div>
                                    <li>IT 1</li>
                                    <li>IT 2</li>
                                    <li>IT 3</li>
                                    <li>IT 4</li>
                                </div>
                            </ul>
                        </div></li>
                    <li className="main-menu">Cars<AiFillCaretDown />
                        <div className="sub-menu">
                            <p>News</p>
                            <ul>
                                <div>
                                    <li>IT 1</li>
                                    <li>IT 2</li>
                                    <li>IT 3</li>
                                    <li>IT 4</li>
                                </div>
                            </ul>
                        </div></li>
                    <button className="log-button-navbar-menu"><FaUserAlt className="user-icon" /> Sign In / Sign Up </button>
                </ul> */}
            </div>
            <Link to="/blogupload" className="log-button"><FaUserAlt className="user-icon" /> Sign In / Sign Up </Link>
            <GiHamburgerMenu className="hamburger" onClick={visible}/>
        </div>
    );
}

export default Navbar;