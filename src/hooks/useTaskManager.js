import useLocalStorage from "./useLocalStorage";

export const useTaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("todoro-tasks", []);

  const addTask = ({ task_value }) => {
    const newTask = {
      isComplete: false,
      taskValue: task_value,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
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

  return {
    tasks,
    setTasks,
    addTask,
    toggleCompleteAt,
    deleteTaskAt,
  };
};
