// import styles from './App.module.css'; /* CSS Modules */

import './App.css'; /* Global CSS */
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import ConfirmEmail from './views/ConfirmEmail/ConfirmEmail';
import Profile from './views/Profile/Profile';
import UpdateProfile from './views/UpdateProfile/UpdateProfile';
import UserProvider from './context/UserContext';
import ProfileProvider from './context/ProfileContext';

export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Auth isRegistering />
            </Route>
            <Route path="/login">
              <Auth />
            </Route>
            <Route path="/confirm-email">
              <ConfirmEmail />
            </Route>
            <ProfileProvider>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route path="/profile/create">
                <UpdateProfile isCreating />
              </Route>
              <Route path="/profile/edit">
                <UpdateProfile />
              </Route>
            </ProfileProvider>
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}
