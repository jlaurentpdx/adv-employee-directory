import { createContext, useContext, useState } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();

export default function ProfileProvider({ children }) {
  const currentProfile = getProfile();
  const [profile, setProfile] = useState(
    currentProfile
      ? {
          name: currentProfile.name,
          email: currentProfile.email,
          birthday: currentProfile.birthday,
          bio: currentProfile.bio,
        }
      : {}
  );

  const value = { profile, setProfile };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export const useProfile = () => {
  const context = useContext(ProfileContext);

  if (!context)
    throw new Error('useProfile cannot be used outside of ProfileProvider');

  return context;
};
