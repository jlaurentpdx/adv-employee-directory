import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function UpdateProfile({ isEditing }) {
  const {
    user: { name, email, birthday, bio },
  } = useUser();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.replace('/profile');
  };

  return (
    <div className="flex flex-col">
      <fieldset className="border-2 container mx-auto w-1/2">
        <legend>{isEditing ? 'Edit Human' : 'Adding Human'}</legend>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col w-3/4 mx-auto text-left"
        >
          <label htmlFor="name">Name: </label>
          <input
            className="mx-auto w-full border-2 bg-transparent"
            id="name"
            type="name"
            value={name}
            readOnly
          />
          <label htmlFor="email">Email: </label>
          <input
            className="mx-auto w-full border-2 bg-transparent"
            id="email"
            type="email"
            value={email}
            readOnly
          />
          <label htmlFor="birthday">Date of birth: </label>
          <input
            className="mx-auto w-full border-2 bg-transparent"
            id="birthday"
            type="date"
            value={birthday}
            readOnly
          />
          <label htmlFor="bio">Bio: </label>
          <textarea
            className="mx-auto w-full border-2 bg-transparent"
            id="bio"
            value={bio}
            readOnly
          />
          <button className="bg-slate-100 text-slate-800 w-full my-5">
            {isEditing ? 'Save' : 'Create'}
          </button>
        </form>
      </fieldset>
    </div>
  );
}
