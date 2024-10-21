import { Button, Input } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

import { Plus } from "lucide-react";

import Task from "./Task";
import { useTaskManager } from "../hooks/useTaskManager";

export default function Tasks() {
  const {
    tasks,
    handleNewTaskSubmitEvent,
    toggleCompleteAt,
    deleteTaskAt,
    triggerEditAt,
    isOpen,
    onOpenChange,
    handleEditTaskSubmitEvent,
  } = useTaskManager();

  return (
    <div className="flex flex-col md:w-[60%] mx-auto space-y-5 mt-5 p-2">
      <form
        className="flex space-x-3 items-center"
        onSubmit={handleNewTaskSubmitEvent}
      >
        <Input name="new_task_value" type="text" />
        <Button isIconOnly size="sm" className="p-2" type="submit">
          <Plus />
        </Button>
      </form>

      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          toggleComplete={() => toggleCompleteAt({ index })}
          deleteTask={() => deleteTaskAt({ index })}
          editTask={() => triggerEditAt({ index })}
        />
      ))}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleEditTaskSubmitEvent}>
              <ModalHeader className="flex flex-col gap-1">
                Edit Task
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Task"
                  name="edit_task_value"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose} type="submit">
                  Submit
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
