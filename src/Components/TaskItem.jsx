import React, { useState } from 'react';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";

const categoryColors = {
  Work: 'primary',
  Personal: 'success',
  Urgent: 'danger',
}

const TaskItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.text)

  const handleSave = () => {
    if (editText.trim() === '') return
    editTask(task.id, editText.trim())
    setIsEditing(false)
  }

  const handleDelete = () => {
    Swal.fire({
      title: 'Delete this task?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#dc3545',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(task.id)
      }
    })
  }

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-2 flex-grow-1">
        <input
          type="checkbox"
          className="form-check-input"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />

        {isEditing ? (
          <input
            type="text"
            className="form-control form-control-sm"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            autoFocus
          />
        ) : (
          <span className={task.completed ? 'text-decoration-line-through text-muted' : ''}>
            {task.text}
          </span>
        )}

        <span className={`badge bg-${categoryColors[task.category]}`}>{task.category}</span>
      </div>

      <div className="d-flex gap-2">
        {isEditing ? (
          <button className="btn btn-sm btn-success" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="btn btn-sm btn-outline-secondary" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button className="btn btn-sm btn-outline-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskItem
