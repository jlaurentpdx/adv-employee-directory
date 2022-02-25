import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: 1,
    name: 'Jordan',
    email: 'test@example.com',
    birthday: '1901/01/01',
    bio: 'I am real human.',
  });

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context)
    throw new Error('useUser cannot be used outside of UserProvider');

  return context;
};
