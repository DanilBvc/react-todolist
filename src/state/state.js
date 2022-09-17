import { rerender } from '..';

export let store = {
  state: {
    tasks: [
      { id: 0, title: 'create', done: true },
      { id: 1, title: 'create', done: true },
      { id: 2, title: 'create', done: false },
      { id: 3, title: 'create', done: true },
      { id: 4, title: 'create', done: true },
    ],
    newTask: '',
  },
  changeNewTask(text) {
    this.state.newTask = text;
    rerender();
  },
  addNewTask() {
    let lengthOfTasks = this.state.tasks.length;
    let contentOfNewTasks = this.state.newTask;
    if (contentOfNewTasks.length === 0) {
      alert('Too short message');
    } else {
      this.state.tasks.push({
        id: lengthOfTasks,
        title: contentOfNewTasks,
        done: false,
      });
      this.state.newTask = '';
      rerender();
    }
  },
  deleteTask(id) {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.state.tasks = this.state.tasks.filter((task) => task.id !== index);
    for (let i = 0; i < this.state.tasks.length; i++) {
      this.state.tasks[i].id = i;
    }
    rerender();
  },
  makeDoneTask(id) {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.state.tasks[index].done = true;
    rerender();
  },
};
