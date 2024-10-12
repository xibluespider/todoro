import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";

import { useDisclosure } from "@nextui-org/react";

export const AboutButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} color="default" variant="flat">
        About
      </Button>
      <Modal
        size="xl"
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
              <ModalBody>
                <p>
                  I created this personal project called Todoro which combines a
                  to-do list, binaural beats, and the Pomodoro technique into
                  one comprehensive tool. This project aims to enhance
                  productivity and focus by integrating these proven methods
                  into a single application.
                </p>
                <p>
                  I am grateful for the resources and tools that helped me build
                  this project, including React, NextUI, and various other
                  libraries that made the development process smoother and more
                  enjoyable.
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://github.com/your-github-username/todoro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <FaGithub size={32} /> */}
                  </a>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
