import { createContext, useState } from "react";

const UserContext = createContext(null);

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
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
