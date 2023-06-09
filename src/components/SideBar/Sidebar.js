import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    }

    return (<aside className="">
        <nav className="min-sidebar-height navbar-vertical-erx">
                <div className="erx-logo-outer">
                    <a className="erx-logo-set"><img alt="erx-logo"
                        src="assets/images/logo.png" /></a>
                </div>
                <ul className="list-unstyled mb-0 sidebar-common-text">

                    <li>
                        <a id="smooth-slide-erx-01" className="smooth-slide-erx arrow-soft" onClick={()=>handleClick('/user-list')}><i
                            className="fa fa-briefcase" aria-hidden="true"></i>Manage Admin Users</a>
                        <a id="smooth-slide-erx-01" className="smooth-slide-erx arrow-soft" onClick={()=>handleClick('admin-user')}><i
                            className="fa fa-briefcase" aria-hidden="true"></i>Users</a>

                        <a id="smooth-slide-erx-01" className="smooth-slide-erx arrow-soft"><i
                            className="fa fa-briefcase" aria-hidden="true"></i>Businesses</a>
                        <a id="smooth-slide-erx-01" className="smooth-slide-erx arrow-soft"><i
                            className="fa fa-briefcase" aria-hidden="true"></i>Coupons</a>

                    </li>
                </ul>
        </nav>
    </aside>)
}


export default Sidebar;