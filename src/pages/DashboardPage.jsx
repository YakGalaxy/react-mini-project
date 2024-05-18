import React from 'react'
import TodoList from '../components/TodoList'

function DashboardPage() {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <TodoList /> 
    </div>
  )
}

export default DashboardPage