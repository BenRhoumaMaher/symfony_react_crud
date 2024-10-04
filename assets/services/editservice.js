import axios from 'axios'

export const getEmployee = async id => {
  try {
    const response = await axios.get(`/api/employee/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateEmployee = async (id, employeeData) => {
  try {
    const response = await axios.patch(`/api/employee/${id}`, employeeData)
    return response
  } catch (error) {
    throw error
  }
}
