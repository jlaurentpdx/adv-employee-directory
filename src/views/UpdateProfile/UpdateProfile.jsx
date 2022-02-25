import { Link } from 'react-router-dom';

export default function UpdateProfile() {
  return (
    <div className="flex flex-col">
      Editing Profile
      <Link to="/profile" className="Link">
        Save changes, back to profile
      </Link>
    </div>
  );
}
