import { Route, Routes } from "react-router-dom";
import { Anchor } from "./shared/Anchor";
import { Menu } from "./Menu";
import { Admin } from "./Admin";
import { ErrorBoundary } from "react-error-boundary";
import { User, UserContextProvider } from "./context/UserContext";
import { useState } from "react";

export function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContextProvider user={user} setUser={setUser}>
      <header>
        <ul>
          <li>
            <Anchor href="/">Menu</Anchor>
          </li>
          <li>
            <Anchor href="/admin">Admin</Anchor>
          </li>
        </ul>
      </header>
      <main>
        <ErrorBoundary fallback={<h1>Oops! An error occurred.</h1>}>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<h1>Page not found 😳</h1>} />
          </Routes>
        </ErrorBoundary>
      </main>
    </UserContextProvider>
  );
}
