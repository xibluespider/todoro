import { useState } from "react";

import { useDisclosure } from "@nextui-org/react";

import useLocalStorage from "./useLocalStorage";

const intialDefaultTasks = [
  [
    { isComplete: false, taskValue: "task one" },
    { isComplete: false, taskValue: "task 2" },
    { isComplete: false, taskValue: "task III" },
  ],
];

export const useTaskManager = () => {
  const [tasks, setTasks] = useLocalStorage(
    "todoro-tasks",
    ...intialDefaultTasks
  );

  const [editIndex, setEditIndex] = useState();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const triggerEditAt = ({ index }) => {
    setEditIndex((prev) => index);
    onOpen();
  };

  const handleEditTaskSubmitEvent = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const edit_task_value = formData.get("edit_task_value");

    editTaskAt({ index: editIndex, editValue: edit_task_value });

    setEditIndex((prev) => null);
    event.target.reset();
    onClose();
  };

  const addTask = ({ task_value }) => {
    if (!task_value) return;

    const newTask = {
      isComplete: false,
      taskValue: task_value,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleNewTaskSubmitEvent = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const new_task_value = formData.get("new_task_value");

    addTask({ task_value: new_task_value });

    event.target.reset();
    event.target.new_task_value.focus();
  };

  const deleteTaskAt = ({ index }) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks((prevTasks) => updatedTasks);
  };

  const toggleCompleteAt = ({ index }) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks((prevTasks) => updatedTasks);
  };

  const editTaskAt = ({ index, editValue }) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, taskValue: editValue } : task
    );
    setTasks((prevTasks) => updatedTasks);
  };

  return {
    tasks,
    setTasks,

    addTask,
    handleNewTaskSubmitEvent,

    toggleCompleteAt,

    deleteTaskAt,

    triggerEditAt,
    isOpen,
    onOpen,
    onOpenChange,
    onClose,
    handleEditTaskSubmitEvent,
    editTaskAt,
  };
};
