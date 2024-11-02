import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";

import { useDisclosure } from "@nextui-org/react";

const LinkListItem = ({ href, text }) => (
  <li className="mb-2">
    <a href={href} target="_blank" className="text-blue-500 hover:underline">
      {text}
    </a>
  </li>
);

export const AboutButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} color="default" variant="flat">
        About
      </Button>
      <Modal
        size="5xl"
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                About Todoro
              </ModalHeader>
              <ModalBody className="p-6">
                <div className="text-center mb-6">
                  <p className="text-lg font-semibold">
                    <strong>Todoro</strong> is a simple and effective
                    productivity tool that combines a to-do list, a Pomodoro
                    timer, and binaural beats to help you stay focused and
                    productive. This project is built using React for the
                    frontend and leverages local storage to manage your tasks
                    and settings.
                  </p>
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4">Features</h2>
                  <ul className="list-disc list-inside">
                    <li className="mb-2">
                      To-Do List: Manage your tasks effortlessly.
                    </li>
                    <li className="mb-2">
                      Pomodoro Timer: Stay focused with timed work sessions.
                    </li>
                    <li className="mb-2">
                      Binaural Beats: Enhance your concentration with soothing
                      sounds.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Acknowledgments</h2>
                  <p className="mb-4">
                    This project would not have been possible without the help
                    and inspiration from various resources. I would like to
                    express my gratitude to all who have supported me in my
                    journey, especially to the people who teach and explain on
                    YouTube, StackOverflow, GitHub discussions, and Reddit, as
                    well as those responsible for documentation works and
                    libraries.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">References</h2>
                  <ul className="list-disc list-inside">
                    <LinkListItem
                      href="https://medium.com/@aishwaryaparab1/deploying-vite-deploying-vite-app-to-github-pages-166fff40ffd3"
                      text="how to deploy using gh-pages"
                    />
                    <LinkListItem
                      href="https://github.com/nextui-org/nextui/issues/1769#issuecomment-2036092086"
                      text="to apply dark mode with nextui"
                    />
                    <LinkListItem
                      href="https://github.com/samuelsit/react-frequency"
                      text="samuelsit/react-frequency"
                    />
                    <LinkListItem
                      href="https://www.youtube.com/@Codevolution"
                      text="codevolution : learn react"
                    />
                    <LinkListItem
                      href="https://tailwindcss.com/docs/installation"
                      text="tailwind docs"
                    />
                    <LinkListItem
                      href="https://nextui.org/docs/guide/introduction"
                      text="nextui docs"
                    />
                    <LinkListItem
                      href="https://lucide.dev/icons/"
                      text="lucide icons"
                    />
                  </ul>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
