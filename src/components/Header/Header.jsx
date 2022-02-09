import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {

	return <header className={s.header}>
		<img src='https://iconarchive.com/download/i88446/icons8/ios7/Logos-Google-Drive-Copyrighted.ico'>
		</img>

		<div className={s.loginBlock}>
			{props.isAuth
				? <div>{props.login}  <button onClick={props.logout}>Log out</button> </div>
				: <NavLink to={'/login'}>Login</NavLink>}
		</div>
	</header>

}

export default Header;
