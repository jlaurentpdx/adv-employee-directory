import './App.css'; /* Global CSS */
import styles from './App.module.css'; /* CSS Modules */
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="text-center">
      <Router>
        <header>
          <h1 className="bg-slate-200 text-slate-800">
            ACME Employee Directory
          </h1>
        </header>
        <hr />
        <Switch>
          <Route exact path="/">
            <div className="flex flex-col">
              You are at the home page
              <Link to="/login" className="text-orange-300">
                Login
              </Link>
              <Link to="/register" className="text-orange-300">
                Register
              </Link>
            </div>
          </Route>
          <Route path="/login">
            <div className="flex flex-col">
              Login page
              <Link to="/profile/:id" className="text-orange-300">
                I'm signed in, take me to profile
              </Link>
              {/* if user tries to access without confirming email, then...?*/}
            </div>
          </Route>
          <Route path="/register">
            <div className="flex flex-col">
              Register page
              <Link to="/confirm-email" className="text-orange-300">
                Signed up, go to confirm email
              </Link>
            </div>
          </Route>
          <Route path="/confirm-email">
            <div className="flex flex-col">
              Confirm your email
              <Link to="/" className="text-orange-300">
                Take me home
              </Link>
            </div>
          </Route>
          <Route exact path="/profile/:id">
            <div className="flex flex-col">
              Your Profile
              <Link to="/profile/:id/edit" className="text-orange-300">
                Edit profile
              </Link>
              <Link to="/" className="text-orange-300">
                Logout
              </Link>
            </div>
          </Route>
          <Route path="/profile/:id/edit">
            <div className="flex flex-col">
              Editing Profile
              <Link to="/profile/:id" className="text-orange-300">
                Save changes, back to profile
              </Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
