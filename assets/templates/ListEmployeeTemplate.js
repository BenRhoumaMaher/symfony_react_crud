import React from 'react'
import { Link } from 'react-router-dom'

function ListTemplate ({ listEmployee, deleteRecord }) {
  return (
    <div className='container'>
      <h2 className='text-center mt-5 mb-3'>Employees</h2>
      <div className='card'>
        <div className='card-header'>
          <Link className='btn btn-primary' to='/addEmployee'>
            Add Employee
          </Link>
        </div>
        <div className='card-body'>
          <table className='table table-striped table-hover table-bordered border-primary'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Degree</th>
                <th>Designation</th>
                <th>Contact</th>
                <th>Address</th>
                <th width='250px'>Action</th>
              </tr>
            </thead>
            <tbody>
              {listEmployee.map((employee, key) => (
                <tr key={key}>
                  <td>{employee.fullname}</td>
                  <td>{employee.email}</td>
                  <td>{employee.degree}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.contact}</td>
                  <td>{employee.address}</td>
                  <td>
                    <Link
                      to={`/showEmployee/${employee.id}`}
                      className='btn btn-info mx-1'
                    >
                      View
                    </Link>
                    <Link
                      className='btn btn-success mx-1'
                      to={`/editEmployee/${employee.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteRecord(employee.id)}
                      className='btn btn-danger mx-1'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListTemplate
