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

  createTask = (newTask) => {
    newTask.id = this.tasks[this.tasks.length - 1].id + 1;
    newTask.complete = false;
    this.tasks.push(newTask);
  };

  deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      this.tasks = this.tasks.filter((task) => task.id !== +taskId);
    } catch (error) {
      console.log();
    }
  };
}

decorate(TaskStore, { tasks: observable });

const taskStore = new TaskStore();
taskStore.fetchTasks();

export default taskStore;
