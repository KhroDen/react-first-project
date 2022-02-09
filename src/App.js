import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from "./components/login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from 'react-redux';
import Preloader from './components/common/preloader/Preloader';


const App = (props) => {

	React.useEffect(() => { props.initializeApp() }, []);

	{
		if (!props.initialized) {
			return <Preloader />
		}
	}

	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<Navbar />
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='/*' element={<ProfileContainer />} />
					<Route path='/profile/:userId' element={<ProfileContainer />} />
					<Route path='/dialogs/*' element={<DialogsContainer />} />
					<Route path='/news' element={<News />} />
					<Route path='/music' element={<Music />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/users' element={<UsersContainer />} />
					<Route path='/login' element={<LoginPage />} />
				</Routes>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
