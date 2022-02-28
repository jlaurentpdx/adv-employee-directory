import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import { signUpUser, signInUser } from '../../services/users';

export default function Auth({ isRegistering = false }) {
  const { setUser } = useUser();
  const { formState, handleFormChange, formError, setFormError } = useForm({
    email: '',
    password: '',
  });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      if (isRegistering && email && password.length > 8) {
        await signUpUser(email, password);
        history.push('/confirm-email');
      } else {
        const resp = await signInUser(email, password);
        setUser(resp);
        history.push('/profile');
      }
    } catch (error) {
      setFormError('invalid login');
      throw error;
    }
    ``;
  };

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
            name="email"
            value={formState.email}
            onChange={handleFormChange}
          />
          <label htmlFor="password">Password</label>
          <input
            className="mx-auto w-full border-2 bg-transparent"
            id="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={handleFormChange}
          />
          <button className="bg-slate-100 text-slate-800 w-full my-5">
            {isRegistering ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <p className="text-red-400">{formError}</p>
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
