import { createContext, useContext, useState } from "react";

const UserContext = createContext<User | null>(null);

type User = {
  id: number;
  name: string;
};

type UserContextProps = {
  children: React.ReactNode;
};

export function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<User>({
    id: 1,
    name: "John Doe",
  });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
}
