import { Input } from './component/Input';
import { Tasks } from './component/Tasks';

function App(props) {
  const tasks = props.store.state.tasks;
  const newTask = props.store.state.newTask;
  let activeTasks = tasks.filter((task) => !task.done);
  let unActiveTasks = tasks.filter((task) => task.done);
  return (
    <div className="App">
      <h1 className="top">Ative tasks {activeTasks.length}</h1>
      {[...activeTasks, ...unActiveTasks].map((task) => {
        return (
          <Tasks
            deleteTask={() => {
              props.deleteTask(task.id);
            }}
            makeDoneTask={() => {
              props.makeDoneTask(task.id);
            }}
            title={task.title}
            done={task.done}
            key={task.id}
          ></Tasks>
        );
      })}
      <Input
        addNewTask={props.addNewTask}
        newTaskChange={props.newTaskChange}
        newTask={newTask}
      ></Input>
    </div>
  );
}

export default App;
