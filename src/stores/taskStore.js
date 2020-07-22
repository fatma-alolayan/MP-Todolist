import { decorate, observable } from "mobx";
import axios from "axios";

class TaskStore {
  tasks = [];

  fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/tasks");
      this.tasks = response.data;
    } catch (error) {
      console.error("Taskstore -> fetchTasks -> error", error);
    }
  };

  createTask = async (newTask) => {
    try {
      newTask.complete = false;
      newTask.id = this.tasks[this.tasks.length - 1].id + 1;
      this.tasks.push(newTask);
      const res = await axios.post("http://localhost:8000/tasks", newTask);
    } catch (error) {
      console.log("Taskstore -> fetchTasks -> error", error);
    }
  };

  deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      this.tasks = this.tasks.filter((task) => task.id !== +taskId);
    } catch (error) {
      console.log("Taskstore -> fetchTasks -> error", error);
    }
  };

  updateTask = async (updatedTask) => {
    try {
      await axios.put(
        `http://localhost:8000/tasks/${updatedTask.id}`,
        updatedTask
      );
      // const task = this.tasks.find((task) => task.id === updatedTask.id);
      // task.complete = !updatedTask.complete;
      updatedTask.complete = !updatedTask.complete;
    } catch (error) {
      console.log("Taskstore -> fetchTasks -> error", error);
    }
  };
}

decorate(TaskStore, { tasks: observable });

const taskStore = new TaskStore();
taskStore.fetchTasks();

export default taskStore;
