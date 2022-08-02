import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
function ListEmployeeComponent() {
    const[employees,setEmployees]=useState([])
    useEffect(() => {
       fetch("http://localhost:8080/api/v1/employees")
       .then(res=>res.json())
       .then(
        data=> setEmployees(data)
       )
      },[]);
  return (
    <div>
        <h2 className='text-center'>Employees List</h2>
        <div className='row' >
            <Table striped bordered size='sm' className='table'>
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee=>
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            
                        </tr>)}

                </tbody>
            </Table>

        </div>
    </div>
  )
}

export default ListEmployeeComponent