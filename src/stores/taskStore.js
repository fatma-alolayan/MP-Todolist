import { decorate, observable } from "mobx";
// data
import tasks from "../tasks";

class TaskStore {
  tasks = tasks;
}

decorate(TaskStore, { tasks: observable });

const taskStore = new TaskStore();

export default taskStore;
