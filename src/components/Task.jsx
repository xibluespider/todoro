import { Button, Checkbox, Card, CardBody } from "@nextui-org/react";
import { Pencil, Trash } from "lucide-react";

export default function Task({ task, deleteTask, toggleComplete, editTask }) {
  return (
    <Card>
      <CardBody>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 mx-3">
            <Checkbox isSelected={task.isComplete} onClick={toggleComplete} />
            <div className="">{task.taskValue}</div>
          </div>
          <div className="flex space-x-2">
            <Button isIconOnly size="sm" className="p-2" onClick={editTask}>
              <Pencil />
            </Button>
            <Button onClick={deleteTask} isIconOnly size="sm" className="p-2">
              <Trash />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
