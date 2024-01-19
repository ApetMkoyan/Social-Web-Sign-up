import React, { useState, useEffect } from "react";
import "./NavMenu.css";
import { NavLink, useNavigate } from "react-router-dom";
import resume from "../utilities/svg/resume icon.svg";
import work from "../utilities/svg/work icon.svg";
import contact from '../utilities/svg/contact icon.svg';
import edit from '../utilities/svg/Edit - 2.svg'
import leftIcon from "../utilities/svg/Arrow - Left.svg";


const NavMenu = ({ onToggleEditMode, currentUserId }) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menuName) => {
    setActiveMenu((prevActiveMenu) => (prevActiveMenu === menuName ? null : menuName));
  };


  return (
    <div>
      <nav className="navigationMenu">
        <span className="navMenu">
          <button className='back' onClick={() => navigate(-1)}>
            <img src={leftIcon} />
          </button>
        </span>
        <NavLink to={`/resume/${currentUserId}`} className={`navMenu ${activeMenu === 'resume' ? 'active' : ''}`}>
          <img src={resume} />
          <span>Resume</span>
        </NavLink>


        <span className={`Edit ${activeMenu === 'edit' ? '' : ''}`} onClick={() => { onToggleEditMode(); handleMenuClick('edit') }}>
          <img src={edit} />
          <p>Edit</p>
        </span>

        <NavLink to={`/work/${currentUserId}`} className={`navMenu ${activeMenu === 'work' ? 'active' : ''}`}>
          <img src={work} />
          <span>Work</span>

        </NavLink>

        <NavLink to={`/friends/${currentUserId}`} className={`navMenu ${activeMenu === 'friends' ? 'active' : ''}`}>
          <img src={contact} />
          <span>Friends</span>

        </NavLink>
      </nav>
    </div>
  );
};

export default NavMenu;
