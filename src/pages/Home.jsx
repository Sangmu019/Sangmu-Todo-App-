import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import TaskForm from '../components/TaskForm'
import FilterBar from '../components/FilterBar'
import TaskList from '../components/TaskList'

const Home = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [statusFilter, setStatusFilter] = useState('All')
  const [categoryFilter, setCategoryFilter] = useState('All')

  const addTask = (text, category) => {
    const newTask = {
      id: Date.now(),
      text,
      category,
      completed: false,
    }
    setTasks([newTask, ...tasks])
  }

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    )
  }

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed))
  }

  const remainingCount = tasks.filter((task) => !task.completed).length
  const completedCount = tasks.filter((task) => task.completed).length

  return (
    <div className="container my-5" style={{ maxWidth: '700px' }}>
      <TaskForm addTask={addTask} />

      <FilterBar
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        remainingCount={remainingCount}
        completedCount={completedCount}
        clearCompleted={clearCompleted}
      />

      <TaskList
        tasks={tasks}
        statusFilter={statusFilter}
        categoryFilter={categoryFilter}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  )
}

export default Home