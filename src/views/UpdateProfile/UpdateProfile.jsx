import { useHistory } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';
import { useUser } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import { createProfile, updateProfile } from '../../services/profiles';

export default function UpdateProfile({ isCreating = false }) {
  const { user } = useUser();

  const { formState, handleFormChange, formError, setFormError } = useForm({
    name: '',
    email: user.email,
    birthday: '',
    bio: '',
  });

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isCreating) {
        await createProfile(profile);
      } else {
        await updateProfile(profile);
      }
    } catch (error) {
      throw error;
    }
    history.replace('/profile');
  };

  return (
    <div className="flex flex-col">
      {isCreating && <p>You will need to create a human profile.</p>}
      <fieldset className="border-2 container mx-auto w-1/2">
        <legend>{isCreating ? 'Adding Human' : 'Edit Human'}</legend>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col w-3/4 mx-auto text-left"
        >
          <label htmlFor="name">Name: </label>
          <input
            className="mx-auto w-full border-2 bg-transparent"
            id="name"
            type="name"
            value={formState.name}
            onChange={handleFormChange}
          />
          <label htmlFor="email">Email: </label>
          <input
            className="mx-auto w-full border-2 bg-transparent"
            id="email"
            type="email"
            value={formState.email}
            readOnly
          />
          <label htmlFor="birthday">Date of birth: </label>
          <input
            className="mx-auto w-full border-2 bg-transparent"
            id="birthday"
            type="date"
            value={formState.birthday}
            onChange={handleFormChange}
          />
          <label htmlFor="bio">Bio: </label>
          <textarea
            className="mx-auto w-full border-2 bg-transparent"
            id="bio"
            value={formState.bio}
            onChange={handleFormChange}
          />
          <button className="bg-slate-100 text-slate-800 w-full my-5">
            {isCreating ? 'Create' : 'Save'}
          </button>
        </form>
      </fieldset>
    </div>
  );
}
