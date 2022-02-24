import { Link } from 'react-router-dom';

export default function ConfirmEmail() {
  return (
    <div className="flex flex-col">
      Confirm your email
      <Link to="/" className="Link">
        Take me home
      </Link>
    </div>
  );
}
