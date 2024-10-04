import axios from 'axios'

export const getEmployee = async id => {
    try {
      const response = await axios.get(`/api/employee/${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  }