import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-lg">Welcome, human!</h1>
      <p className="font-thin text-sm">
        As human, you must enroll in directory of humans.
      </p>

      <Link to="/login" className="Link">
        Login
      </Link>
      <Link to="/register" className="Link">
        Create Account
      </Link>
    </div>
  );
}
