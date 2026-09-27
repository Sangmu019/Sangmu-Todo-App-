import React, { useState, useEffect } from 'react'

const Header = () => {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.body.classList.toggle('dark-mode', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <header className="bg-dark text-white px-4 py-3 d-flex justify-content-between align-items-center">
      <h3 className="m-0">📝 TaskFlow</h3>
      <button className="btn btn-outline-light btn-sm" onClick={() => setDark(!dark)}>
        {dark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  )
}

export default Header
