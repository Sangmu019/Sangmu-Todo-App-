import React, { useState } from 'react'
import Swal from 'sweetalert2'


const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('Personal')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim() === '') {
      Swal.fire({
        title: 'Missing Task',
        icon: 'info',
        text: 'Please type a task before adding it.',
        timer: 2500,
      })
      return
    }

    addTask(text.trim(), category)
    setText('')
    setCategory('Personal')
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="What do you need to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        className="form-select"
        style={{ maxWidth: '150px' }}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select>

      <button type="submit" className="btn btn-dark">
        Add
      </button>
    </form>
  )
}

export default TaskForm
