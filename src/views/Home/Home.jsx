import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      You are at the home page
      <Link to="/login" className="text-orange-300">
        Login
      </Link>
      <Link to="/register" className="text-orange-300">
        Register
      </Link>
    </div>
  );
}
