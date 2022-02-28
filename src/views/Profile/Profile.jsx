import { Link } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';

export default function Profile() {
  const {
    profile: { name, email, birthday, bio },
  } = useProfile();

  return (
    <div className="flex flex-col">
      <fieldset className="border-2 container mx-auto w-1/2 text-left">
        <legend className="text-center">Human Profile</legend>
        <table className="mx-2">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Birthday</td>
              <td>{birthday}</td>
            </tr>
            <tr>
              <td>Bio</td>
              <td>{bio}</td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      <Link to="/profile/create" className="Link">
        [ Create profile ]
      </Link>
      <Link to="/profile/edit" className="Link">
        Edit profile
      </Link>
      <Link to="/" className="Link">
        Logout
      </Link>
    </div>
  );
}
