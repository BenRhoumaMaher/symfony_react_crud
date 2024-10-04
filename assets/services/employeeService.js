import axios from 'axios'

export const addEmployee = async FormData => {
  try {
    const response = await axios.post('/api/employee', FormData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data
  } catch (error) {
    if (
      error.response &&
      error.response.data &&
      error.response.status === 400
    ) {
      return error.response.data
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
