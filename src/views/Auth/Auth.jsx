import { Link } from 'react-router-dom';

export default function Auth({ isRegistering = false }) {
  return (
    <div className="flex flex-col">
      {isRegistering ? (
        <>
          Register page
          <Link to="/confirm-email" className="Link">
            Signed up, go to confirm email
          </Link>
        </>
      ) : (
        <>
          Login page
          <Link to="/profile/:id" className="Link">
            I'm signed in, take me to profile
          </Link>
          {/* if user tries to access without confirming email, then...?*/}
        </>
      )}
    </div>
  );
}
