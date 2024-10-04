import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const EditEmployeeTemplate = ({
  fullname,
  email,
  password,
  degree,
  designation,
  contact,
  address,
  isSaving,
  saveRecord,
  setFullName,
  setEmail,
  setPassword,
  setDegree,
  setDesignation,
  setContact,
  setAddress
}) => (
  <Layout>
    <div className='container'>
      <h2 className='text-center mt-5 mb-3'>Edit Employee</h2>
      <div className='card'>
        <div className='card-header'>
          <Link className='btn btn-info float-left' to='/'>
            Back To Employee List
          </Link>
        </div>
        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                onChange={event => {
                  setFullName(event.target.value)
                }}
                value={fullname}
                type='text'
                className='form-control'
                id='fullname'
                name='fullname'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='name'>Email</label>
              <input
                onChange={event => {
                  setEmail(event.target.value)
                }}
                value={email}
                type='email'
                className='form-control'
                id='email'
                name='email'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                onChange={event => {
                  setPassword(event.target.value)
                }}
                value={password}
                type='password'
                className='form-control'
                id='password'
                name='password'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='degree'>Degree</label>
              <input
                onChange={event => {
                  setDegree(event.target.value)
                }}
                value={degree}
                type='text'
                className='form-control'
                id='degree'
                name='degree'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='designation'>Designation</label>
              <input
                onChange={event => {
                  setDesignation(event.target.value)
                }}
                value={designation}
                type='text'
                className='form-control'
                id='designation'
                name='designation'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='contact'>Contact</label>
              <input
                onChange={event => {
                  setContact(event.target.value)
                }}
                value={contact}
                type='text'
                className='form-control'
                id='contact'
                name='contact'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='address'>Address</label>
              <input
                onChange={event => {
                  setAddress(event.target.value)
                }}
                value={address}
                type='text'
                className='form-control'
                id='address'
                name='address'
              />
            </div>
            <button
              disabled={isSaving}
              onClick={saveRecord}
              type='button'
              className='btn btn-success mt-3'
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default EditEmployeeTemplate
