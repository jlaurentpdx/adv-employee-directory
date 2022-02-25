import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="flex flex-col">
      Your Profile
      <Link to="/profile/edit" className="Link">
        Edit profile
      </Link>
      <Link to="/" className="Link">
        Logout
      </Link>
    </div>
  );
}
