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

  return {
    tasks,
    setTasks,
    handleNewTaskSubmitEvent,
    addTask,
    toggleCompleteAt,
    deleteTaskAt,
  };
};
