import React, { useState } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import "react-pro-sidebar/dist/css/styles.css";
import "./../styling/Header.css";
import { Link } from "react-router-dom";


const SideBar = () => {

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <p>{menuCollapse ? "Her" : "EmpowHer"}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>
                                <li className='nav-item'>
                                    <Link to='/' className='nav-links'>
                                        Home
                                    </Link>
                                </li>
                            </MenuItem>
                            <MenuItem icon={<FaList />}>
                                <li className='nav-item'>
                                    <Link to='/about' className='nav-links'>
                                        About Us
                                    </Link>
                                </li>
                            </MenuItem>
                            <MenuItem icon={<FaRegHeart />}>
                                <li className='nav-item'>
                                    <Link to='/dashboard' className='nav-links'>
                                        Dashboard
                                    </Link>
                                </li>
                            </MenuItem>
                            <MenuItem icon={<FaList />}>
                                <li className='nav-item'>
                                    <Link to='/courses' className='nav-links'>
                                        Courses
                                    </Link>
                                </li>
                            </MenuItem>
                            <MenuItem icon={<RiPencilLine />}>
                                <li className='nav-item'>
                                    <Link to='/profile' className='nav-links'>
                                        Profile
                                    </Link>
                                </li>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default SideBar;