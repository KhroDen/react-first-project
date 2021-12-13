import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
  return <nav className={s.nav}>

    <div className={s.item}>
      <NavLink to="/profile">Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogs">Dialogs</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/music">Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/settings">Settings</NavLink>
    </div>

  </nav>

}

export default Navbar;
