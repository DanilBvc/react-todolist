export const Tasks = (props) => {
  const deleteTasks = () => {
    props.deleteTask();
  };
  const makeDone = () => {
    props.makeDoneTask();
  };
  const Buttons = () => {
    return (
      <div className="action-btn">
        {props.done ? (
          <p onClick={deleteTasks}>X</p>
        ) : (
          <p onClick={makeDone}>Y</p>
        )}
      </div>
    );
  };
  let classValue = 'task ' + (props.done ? 'task-done' : '');
  return (
    <div className={classValue}>
      <p>{props.title}</p>
      <Buttons></Buttons>
    </div>
  );
};
