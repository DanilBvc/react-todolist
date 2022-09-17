import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './state/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerender = () => {
  root.render(
    <React.StrictMode>
      <App
        store={store}
        deleteTask={store.deleteTask.bind(store)}
        makeDoneTask={store.makeDoneTask.bind(store)}
        newTaskChange={store.changeNewTask.bind(store)}
        addNewTask={store.addNewTask.bind(store)}
      />
    </React.StrictMode>
  );
};

rerender();
