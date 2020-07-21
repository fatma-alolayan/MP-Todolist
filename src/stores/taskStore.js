import { decorate, observable } from "mobx";
// data
import tasks from "../tasks";

class TaskStore {
  tasks = tasks;

  createTask = (newTask) => {
    newTask.id = this.tasks[this.tasks.length - 1].id + 1;
    this.tasks.push(newTask);
  };
}

decorate(TaskStore, { tasks: observable });

const taskStore = new TaskStore();

export default taskStore;
