import React from 'react'

const FilterBar = ({
  statusFilter,
  setStatusFilter,
  categoryFilter,
  setCategoryFilter,
  remainingCount,
  completedCount,
  clearCompleted,
}) => {
  const statuses = ['All', 'Active', 'Completed']
  const categories = ['All', 'Work', 'Personal', 'Urgent']

  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
      <div className="btn-group">
        {statuses.map((status) => (
          <button
            key={status}
            className={`btn btn-sm ${statusFilter === status ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => setStatusFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <select
        className="form-select form-select-sm"
        style={{ maxWidth: '160px' }}
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === 'All' ? 'All Categories' : cat}
          </option>
        ))}
      </select>

      <small className="text-muted">
        {remainingCount} remaining · {completedCount} completed
      </small>

      {completedCount > 0 && (
        <button className="btn btn-sm btn-outline-danger" onClick={clearCompleted}>
          Clear Completed
        </button>
      )}
    </div>
  )
}

export default FilterBar