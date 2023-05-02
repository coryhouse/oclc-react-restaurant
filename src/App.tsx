import { Route, Routes } from "react-router-dom";
import { Anchor } from "./shared/Anchor";
import { Menu } from "./Menu";
import { Admin } from "./Admin";

export function App() {
  return (
    <>
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
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </>
  );
}
