import React from "react";
import Logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <div className="erx-top-navbar">
            <div className="inner-navbar-erx-fit d-flex align-items-center">
                <button role="button" className="toggler-btn-erx">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <a className="logo-toggle-appear pl-4"><img src={Logo} alt="logo" /></a>
                <nav className="navbar navbar-expand-lg p-0 ml-auto">


                    <ul className="navbar-nav ml-auto xs-inline-nav">

                        <li className="nav-item dropdown">
                            <div className="d-flex align-items-center arr--trnsform">
                                <div className="position-relative">
                                    <div className="erx-topnav-user-profile">
                                        <img src="" alt="user-pic-erx" />

                                    </div>

                                </div>

                                <a className="nav-link dropdown-toggle d-flex align-items-center text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>Mohd Javed</span><i className="fa fa-angle-down font-bell pl-2" aria-hidden="true"></i></a>
                                <div className="dropdown-menu profile--mennulist" aria-labelledby="navbarDropdown">
                                    <div className="row">
                                        <div className="col-7">
                                            <a className="text-white profile--onlinetext" role="button"><span>Mohd Javed</span></a>
                                        </div>
                                        <div className="col-5">
                                            <a className="dropdown-item logout--textright" > <i className="fa fa-power-off"></i>Logout</a>
                                        </div>
                                    </div>
                                    {/* <!-- <div className="bottom--contentdrop">
                            <a className="dropdown-item" routerLink="/user/edit-profile"><i className="fa fa-user-md" aria-hidden="true"></i> Edit Profile</a>
                           
                        </div> --> */}

                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}


export default Navbar;