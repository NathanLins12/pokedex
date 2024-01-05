import { Outlet } from "react-router-dom";
import { Container } from "./styles";

export function App() {
  return (
    <Container>
      <header>header</header>

      <main>
        <Outlet />
      </main>

      <footer>footer</footer>
    </Container>
  );
}
