import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<Profile posts={props.state.profilePage.posts}
            addPost={props.addPost}
            newPostText={props.state.profilePage.newPostText}
            updateNewPostText={props.updateNewPostText} />} />
          <Route path='/profile' element={<Profile posts={props.state.profilePage.posts}
            addPost={props.addPost}
            newPostText={props.state.profilePage.newPostText} />}
            updateNewPostText={props.updateNewPostText} />
          <Route path='/dialogs/*' element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
            messages={props.state.dialogsPage.messages} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
