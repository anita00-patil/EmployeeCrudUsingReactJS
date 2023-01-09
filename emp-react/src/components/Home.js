import {Link, useNavigate} from "react-router-dom"
import axios from "axios";
import Table from 'react-bootstrap/Table'
import React, { useState, useEffect } from "react";
import './Home.css';
import Timer from './Timer';

 function Home() {
    
        const navigate = useNavigate()
        const [getEmployee, setgetEmployee] = useState([])
        const [getSearch, setgetSearch] = useState("")
        // const[loading,setloading]=useState([false])
        // const[searchTitle, setSearchTitle]=useState("")
        
        const handleUpdate =(id)=>{
           navigate("/Update/" +id)

        }

        const handleDelete =(id)=>{
            navigate("/Delete/" +id)
 
         }
        
        
          useEffect(() => {
            // props.fetchAllEmployees();
            axios.get("http://localhost:5030/api/Employees").then(response=>{setgetEmployee(response.data)})
            .catch(error=>{console.log(error)})
          }, []);
  return (
     
    <div className="container">
      <Timer></Timer>
      
      <div className="row">
      
      {/* <div className="col-md-4"> */}
      <h2 className="text">REACT CRUD USING WEB API </h2>  
      <h5 className="text">Employee Details!!</h5><br/><br/><br/>
      <div className="col-lg-3">
        
        <input
          type="text"
          className="form-control"
         
          placeholder="search"
          value={getSearch}
          onChange={e=>setgetSearch(e.target.value)}
          
        />
      </div>
      <Table className="mt-4" style={{color:"black"}}striped bordered hover sixe="sm">
        <thead>
            <tr>
              <th scope="col">EmployeeId</th>
              <th scope="col">EmployeeName</th>
              <th scope="col">Band</th>
              <th scope="col">Role</th>
              <th scope="col">Designation</th>
              <th scope="col">Responsibilities</th>
              <th scope="col">HiredDate</th>
              <th scope="col">Options</th>
            
            </tr>
        </thead>
        <tbody>{
          getEmployee &&
          getEmployee.filter(searchValue=>{
            if(getSearch===""){
              return searchValue;
            }
            else if(searchValue.designation.toLowerCase().includes(getSearch.toLowerCase()))
            {
              return searchValue;
            }
          }).
            map((record, index) => {
              return (
                <tr key={index}>
                  <td>{record.employeeId}</td>
                  <td>{record.name}</td>
                  <td>{record.band}</td>
                  <td>{record.role}</td>
                  <td>{record.designation}</td>
                  <td>{record.responsibilities}</td>
                  <td>{record.hiredDate}</td>
                  <td>
                     <button className="btn btn-dark" onClick={()=>{handleUpdate(record.employeeId)}} >Update</button>&nbsp;
                     <button className="btn btn-danger" onClick={()=>{handleDelete(record.employeeId)}}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
      </Table>
    
        
      <br/>
       
      </div>
      <br/><br/>
       
      {/* </div> */}
      <Link className="button btn btn-primary" to="/employeeCreate">EmployeeCreate</Link> 
  </div>
  
  )
}

export default Home;