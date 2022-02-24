import './App.css'; /* Global CSS */
import styles from './App.module.css'; /* CSS Modules */
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import ConfirmEmail from './views/ConfirmEmail/ConfirmEmail';
import Profile from './views/Profile/Profile';
import UpdateProfile from './views/UpdateProfile/UpdateProfile';

export default function App() {
  return (
    <div className={`text-center`}>
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
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/profile/:id/edit">
            <UpdateProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
