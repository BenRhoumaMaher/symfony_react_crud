import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getEmployee } from '../services/editservice'
import ViewEmployeeTemplate from '../templates/ViewEmployeeTemplate'
function ViewEmployee () {
  const [id, setId] = useState(useParams().id)
  const [employee, setEmployee] = useState({
    fullname: '',
    email: '',
    contact: '',
    degree: '',
    designation: '',
    address: ''
  })
  useEffect(() => {
    const fetchEmployee = async() => {
    try {
        const data = await getEmployee(id)
        setEmployee(data)
      }catch(error) {
        console.log(error)
      }
    }
    fetchEmployee()
  }, [id])
  return (
    <ViewEmployeeTemplate employee={employee} />
  )
}
export default ViewEmployee
