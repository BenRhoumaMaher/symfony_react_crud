import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const ViewEmployeeTemplate = ({ employee }) => {
  return (
    <Layout>
      <div className='container'>
        <h2 className='text-center mt-5 mb-3'>View Employee</h2>
        <div className='card'>
          <div className='card-header'>
            <Link className='btn btn-info float-left' to='/'>
              {' '}
              Back To Employee List
            </Link>
          </div>
          <div className='card-body'>
            <b className='text-muted'>Name:</b>
            <p>{employee.fullname}</p>
            <b className='text-muted'>Email:</b>
            <p>{employee.email}</p>
            <b className='text-muted'>Contact:</b>
            <p>{employee.contact}</p>
            <b className='text-muted'>Degree:</b>
            <p>{employee.degree}</p>
            <b className='text-muted'>Designation:</b>
            <p>{employee.designation}</p>
            <b className='text-muted'>Address:</b>
            <p>{employee.address}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default ViewEmployeeTemplate
