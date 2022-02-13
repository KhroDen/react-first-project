import './App.css';
import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from "./components/login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect, Provider } from 'react-redux';
import Preloader from './components/common/preloader/Preloader';
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



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
				<Suspense fallback={<div>Loading...</div>}>
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
				</Suspense>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SamuraiJSApp = (props) => {
	return <BrowserRouter>
		<React.StrictMode>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</React.StrictMode>,
	</BrowserRouter>
}

export default SamuraiJSApp;