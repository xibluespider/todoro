import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import { AboutButton } from "./components/AboutButton";
import Tasks from "./components/Tasks";

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

      <Tabs fullWidth aria-label="Options">
        <Tab key="tasks" title="Tasks">
          <Tasks />
        </Tab>
        <Tab key="pomodoro" title="Pomodoro">
          <Card>
            <CardBody>Pomodoro component here</CardBody>
          </Card>
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
