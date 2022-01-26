import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {

	return <header className={s.header}>
		<img src='https://iconarchive.com/download/i88446/icons8/ios7/Logos-Google-Drive-Copyrighted.ico'>
		</img>

		<div className={s.loginBlock}>
			{props.isAuth ? props.login :
				<NavLink to={'/login'}>Login</NavLink>}
		</div>
	</header>

}

export default Header;
