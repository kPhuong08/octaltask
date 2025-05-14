import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SharedUser } from '@/types/task';

type UserRole = 'viewer' | 'editor' | 'admin';

interface User {
  id: string;
  name: string;
  email: string;
  photoUrl?: string;
}

interface UserContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
  shareWithUser: (itemId: string, itemType: 'task' | 'list', email: string, role: UserRole) => Promise<SharedUser>;
  updateUserPermission: (itemId: string, itemType: 'task' | 'list', userId: string, role: UserRole) => Promise<void>;
  removeUserAccess: (itemId: string, itemType: 'task' | 'list', userId: string) => Promise<void>;
  getSharedUsers: (itemId: string, itemType: 'task' | 'list') => Promise<SharedUser[]>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  // start with a default user
  const [currentUser, setCurrentUser] = useState<User | null>({
    id: 'test-user-1',
    name: 'John Doe',
    email: 'john@example.com',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TestUser',
  });

  // test user with localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('octalTaskUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    } else {
      // Save our test user to localStorage
      localStorage.setItem('octalTaskUser', JSON.stringify(currentUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // login successfully with email and password
    const user: User = {
      id: '1',
      name: 'Demo User',
      email: email,
      photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo'
    };

    setCurrentUser(user);
    localStorage.setItem('octalTaskUser', JSON.stringify(user));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('octalTaskUser');
  };

  const register = async (name: string, email: string, password: string) => {
    // test user
    const user: User = {
      id: Date.now().toString(),
      name,
      email,
      photoUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name.replace(/\s/g, '')}`
    };

    setCurrentUser(user);
    localStorage.setItem('octalTaskUser', JSON.stringify(user));
  };

  // Simulated functions for sharing
  const shareWithUser = async (
    itemId: string,
    itemType: 'task' | 'list',
    email: string,
    role: UserRole
  ): Promise<SharedUser> => {
    // In a real app, this would be an API call
    // For our demo, we'll generate a fake user
    const sharedUser: SharedUser = {
      id: Date.now().toString(),
      name: email.split('@')[0],
      email,
      role,
      photoUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email.split('@')[0]}`
    };

    // In a real app, we would update the database
    return sharedUser;
  };

  const updateUserPermission = async (
    itemId: string,
    itemType: 'task' | 'list',
    userId: string,
    role: UserRole
  ): Promise<void> => {
    // In a real app, this would be an API call to update permissions
    console.log(`Updated ${userId} to ${role} for ${itemType} ${itemId}`);
  };

  const removeUserAccess = async (
    itemId: string,
    itemType: 'task' | 'list',
    userId: string
  ): Promise<void> => {
    // In a real app, this would be an API call to remove access
    console.log(`Removed access for ${userId} from ${itemType} ${itemId}`);
  };

  const getSharedUsers = async (
    itemId: string,
    itemType: 'task' | 'list'
  ): Promise<SharedUser[]> => {
    // In a real app, this would be an API call to get shared users
    // For demo, return an empty array
    return [];
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        login,
        logout,
        register,
        shareWithUser,
        updateUserPermission,
        removeUserAccess,
        getSharedUsers
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
