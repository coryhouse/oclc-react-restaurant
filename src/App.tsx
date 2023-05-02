import { Anchor } from "./shared/Anchor";

export function App() {
  return (
    <main>
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
    </main>
  );
}
