import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import { AboutButton } from "./components/AboutButton";
import Tasks from "./components/Tasks";

import Pomodoro from "./components/Pomodoro";

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

      <Tabs
        fullWidth
        aria-label="Options"
        defaultSelectedKey={"pomodoro"}
        destroyInactiveTabPanel={false}
      >
        <Tab key="tasks" title="Tasks">
          <Tasks />
        </Tab>
        <Tab key="pomodoro" title="Pomodoro">
          <Pomodoro />
        </Tab>
        <Tab key="binaural" title="Binaural">
          <Card>
            <CardBody>Binaural component here</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
