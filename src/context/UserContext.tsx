import { createContext, useContext } from "react";

const UserContext = createContext<UserContext | null>(null);

type UserContext = {
  user: User | null;
  setUser: (user: User) => void;
};

export type User = {
  id: number;
  name: string;
};

type UserContextProps = {
  user: User | null;
  setUser: (user: User) => void;
  children: React.ReactNode;
};

export function UserContextProvider({
  children,
  user,
  setUser,
}: UserContextProps) {
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
}
