import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

const Homepage = ({ employees, setCurrent }) => {
  return (
    <div>
        <Header title={"Employee Directory"} />
        <SearchBar />
        <EmployeeList employees={employees} setCurrent={setCurrent}/>
    </div>
  )
}

export default Homepage