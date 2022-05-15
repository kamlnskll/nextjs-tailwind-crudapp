import React from 'react'
import EmployeeCard from './EmployeeCard'
import EmployeeModal from './EmployeeModal'

const Employees = () => {
  return (
    <div>
      <div className='flex pt-16'>
        <h1 className='text-4xl pl-16'>Employees</h1>
        <h1 className='text-4xl pl-4'>(0)</h1>
        <EmployeeModal />
      </div>
      <div className='pt-16 px-16'>
        <EmployeeCard />
      </div>
    </div>
  )
}

export default Employees
