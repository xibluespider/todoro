import { Button, Input } from "@nextui-org/react";

import { Plus } from "lucide-react";

import Task from "./Task";
import { useTaskManager } from "../hooks/useTaskManager";

export default function Tasks() {
  const { tasks, setTasks, addTask, toggleCompleteAt, deleteTaskAt } =
    useTaskManager();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const new_task_value = formData.get("new_task_value");

    addTask({ task_value: new_task_value });

    event.target.reset();
    event.target.new_task_value.focus();
  };

  return (
    <div className="flex flex-col md:w-[60%] mx-auto space-y-5 mt-5 p-2">
      <form className="flex space-x-3 items-center" onSubmit={handleFormSubmit}>
        <Input name="new_task_value" type="text" />
        <Button isIconOnly size="sm" className="p-2" type="submit">
          <Plus />
        </Button>
      </form>

      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          toggleComplete={() => toggleCompleteAt({ index })}
          deleteTask={() => deleteTaskAt({ index })}
        />
      ))}
    </div>
  );
}
