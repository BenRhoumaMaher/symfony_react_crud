import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { deleteEmployee, fetchEmployees } from '../services/listservice'
import ListTemplate from '../templates/ListEmployeeTemplate'
import Layout from '../components/Layout'
function ListEmployee () {
  const [listEmployee, setEmployeeList] = useState([])
  useEffect(() => {
    fetchEmployeeList()
  }, [])
  const fetchEmployeeList = async () => {
    try {
      const data = await fetchEmployees()
      setEmployeeList(data)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteRecord = async id => {
    Swal.fire({
      title: 'Are you sure you want to delete this employee?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d85',
      confirmButtonText: 'Yes'
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await deleteEmployee(id)
          Swal.fire({
            icon: 'success',
            title: 'Employee has been deleted successfully!',
            showConfirmButton: false,
            timer: 1000
          })
          fetchEmployeeList()
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops, Something went wrong!',
            showConfirmButton: false,
            timer: 1000
          })
        }
      }
    })
  }
  return (
    <Layout>
      <ListTemplate listEmployee={listEmployee} deleteRecord={deleteRecord} />
    </Layout>
  );
}
export default ListEmployee