import React from 'react';

export const Input = (props) => {
  const InputRef = React.createRef();
  const changeInput = () => {
    props.newTaskChange(InputRef.current.value);
  };
  const addTask = () => {
    props.addNewTask();
  };
  return (
    <div className="task-input">
      <input
        type="text"
        ref={InputRef}
        onChange={changeInput}
        value={props.newTask}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
};
