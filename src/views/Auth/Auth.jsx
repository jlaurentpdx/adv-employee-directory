import { Link, useHistory } from 'react-router-dom';

export default function Auth({ isRegistering = false }) {
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!isRegistering) history.push('/profile');
      else history.push('/confirm-email');
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className="flex flex-col">
      {isRegistering ? <h2>Welcome!</h2> : <h2>Welcome back!</h2>}
      <fieldset className="border-2 container mx-auto w-1/2">
        <legend>{isRegistering ? 'Create account' : 'Login'}</legend>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col w-3/4 mx-auto text-left"
        >
          <label htmlFor="email">Email</label>
          <input
            className="mx-auto w-full border-2 bg-transparent"
            id="email"
            type="email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="mx-auto w-full border-2 bg-transparent"
            id="password"
            type="password"
          />
          <button className="bg-slate-100 text-slate-800 w-full my-5">
            {isRegistering ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
      </fieldset>
      {isRegistering ? (
        <>
          <p>Already have an account?</p>
          <Link to="/login" className="Link">
            Login
          </Link>
        </>
      ) : (
        <>
          <p>Need to create an account?</p>
          <Link to="/register" className="Link">
            Create account
          </Link>
        </>
      )}
      {/* if user tries to access without confirming email, then...?*/}
    </div>
  );
}
