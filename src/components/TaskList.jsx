import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
import TaskListItem from './TAskListitem';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div>
      {tasks.map(task => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
