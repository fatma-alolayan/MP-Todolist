import { decorate, observable } from "mobx";
// data
import tasks from "../tasks";

class TaskStore {
  tasks = tasks;

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

export default taskStore;
