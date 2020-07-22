import { decorate, observable } from "mobx";
import axios from "axios";

// data
import tasks from "../tasks";

class TaskStore {
  tasks = [];

  fetchTasks = async () => {
    const response = await axios.get("http://localhost:8000/tasks");
    this.tasks = response.data;
  };

  createTask = (newTask) => {
    newTask.id = this.tasks[this.tasks.length - 1].id + 1;
    newTask.complete = false;
    this.tasks.push(newTask);
  };

  deleteTask = (taskId) => {
    this.tasks = this.tasks.filter((task) => task.id !== +taskId);
  };
}

decorate(TaskStore, { tasks: observable });

const taskStore = new TaskStore();
taskStore.fetchTasks();

export default taskStore;
