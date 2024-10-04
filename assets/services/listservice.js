// src/services/employeeservice.js
import axios from 'axios'

export const fetchEmployees = async () => {
  try {
    const response = await axios.get('/api/employee')
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteEmployee = async id => {
  try {
    const response = await axios.delete(`/api/employee/${id}`)
    return response
  } catch (error) {
    throw error
  }
}