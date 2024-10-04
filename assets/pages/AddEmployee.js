import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { addEmployee } from '../services/employeeService'
import AddEmployeeTemplate from '../templates/AddEmployeeTemplate'
function AddEmployee () {
  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [degree, setDegree] = useState('')
  const [password, setPassword] = useState('')
  const [contact, setContact] = useState('')
  const [designation, setDesignation] = useState('')
  const [address, setAddress] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const saveRecord = async () => {
    setIsSaving(true)
    let formData = new FormData()
    formData.append('fullname', fullname)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('contact', contact)
    formData.append('degree', degree)
    formData.append('designation', designation)
    formData.append('address', address)

    try {
      const response = await addEmployee(formData)
      if (response.errors) {
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          html: `<p style="color: red;">${response.errors.join(', ')}</p>`,
          showConfirmButton: true
        })
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Employee has been added successfully!',
          showConfirmButton: true
        })
        setIsSaving(false)
        setFullName('')
        setPassword('')
        setEmail('')
        setDegree('')
        setDesignation('')
        setContact('')
        setAddress('')
      }
    } catch (error) {
      console.error('Error adding employee:', error)
      Swal.fire({
        icon: 'error',
        title: 'Oops, Something went wrong!',
        showConfirmButton: true
      })
    }
    setIsSaving(false)
  }
  return (
    <AddEmployeeTemplate
      fullname={fullname}
      email={email}
      password={password}
      degree={degree}
      designation={designation}
      contact={contact}
      address={address}
      isSaving={isSaving}
      saveRecord={saveRecord}
      setFullName={setFullName}
      setEmail={setEmail}
      setPassword={setPassword}
      setDegree={setDegree}
      setDesignation={setDesignation}
      setContact={setContact}
      setAddress={setAddress}
    />
  )
}
export default AddEmployee
