import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getEmployee, updateEmployee } from '../services/editservice'
import EditEmployeeTemplate from '../templates/EditEmployeeTemplate'
function EditEmployee () {
  const [id, setId] = useState(useParams().id)
  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [degree, setDegree] = useState('')
  const [designation, setDesignation] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const employee = await getEmployee(id)
        setFullName(employee.fullname)
        setPassword(employee.password)
        setEmail(employee.email)
        setDegree(employee.degree)
        setDesignation(employee.designation)
        setContact(employee.contact)
        setAddress(employee.address)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops, Something went wrong!',
          showConfirmButton: true
        })
      }
    }
    fetchEmployee()
  }, [id])
  const saveRecord = async () => {
    setIsSaving(true)
    const employeeData = {
      fullname,
      email,
      password,
      degree,
      designation,
      contact,
      address
    }
    try {
      await updateEmployee(id, employeeData)
      Swal.fire({
        icon: 'success',
        title: 'Employee updated successfully!',
        showConfirmButton: true
      })
      setIsSaving(false)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops, Something went wrong!',
        showConfirmButton: true
      })
    }
    setIsSaving(false)
  }
  return (
    <EditEmployeeTemplate
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
export default EditEmployee
