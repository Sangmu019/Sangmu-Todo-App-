import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({
  tasks,
  statusFilter,
  categoryFilter,
  toggleComplete,
  deleteTask,
  editTask,
}) => {
  const filteredTasks = tasks.filter((task) => {
    const statusMatch =
      statusFilter === 'All' ||
      (statusFilter === 'Active' && !task.completed) ||
      (statusFilter === 'Completed' && task.completed)

    const categoryMatch = categoryFilter === 'All' || task.category === categoryFilter

    return statusMatch && categoryMatch
  })

  if (filteredTasks.length === 0) {
    return <p className="text-center text-muted my-5">No tasks match this filter yet.</p>
  }

  return (
    <ul className="list-group">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  )
}

export default TaskList
