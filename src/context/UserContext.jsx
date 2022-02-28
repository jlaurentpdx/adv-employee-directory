import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context)
    throw new Error('useUser cannot be used outside of UserProvider');

  return context;
};
