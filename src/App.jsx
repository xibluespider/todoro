import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { AboutButton } from "./components/AboutButton";

export default function App() {
  return (
    <div>
      <Navbar maxWidth="full">
        <NavbarBrand>
          <p>TODORO</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <AboutButton />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
