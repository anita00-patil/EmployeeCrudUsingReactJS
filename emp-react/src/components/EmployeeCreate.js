import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './Home.css';
import swal from 'sweetalert';

 function EmployeeCreate() {
    const [Name,setName] = useState("");
    const [Band,setBand] = useState("");
    const [Role,setRole] = useState("");
    const [Designation,setDesignation] = useState("");
    const [Responsibilities,setResponsibilities] = useState("");
    const [hiredDate,sethiredDate] = useState("");
    const navigate=useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {name:Name, band:Band,role:Role,designation:Designation,responsibilities:Responsibilities,hiredDate:hiredDate}
        axios.post("http://localhost:5030/api/Employees", data).then((result)=>{
          swal({
            title: "Good job!",
            text: "Created!",
            icon: "success",
            button: "Done",
          });
            console.log(result.data);
        }).then((res)=>{navigate("/")})
        .catch(error=>console.log(error))
    }

  return (
   
    <div className='row'>
      <h2 className='text-dark'>
      Create the Details of Employee!!..
    </h2>
    <Form method="POST" onSubmit={handleSubmit}>
      <div className="col-lg-6">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
         required
          type="text"
          className="form-control"
          name="name"
          placeholder="name"
          value={Name}
          onChange={e=>setName(e.target.value)}   
        />
      </div>
      <div className="col-lg-6">
        <label htmlFor="band" className="form-label">
          Band
        </label>
        <input
          type="text"
          className="form-control"
          name="band"
          required
          placeholder="Band"
          value={Band}
          onChange={e=>setBand(e.target.value)}
        />
      </div>
      <div className="col-lg-6">
        <label htmlFor="role" className="form-label">
          Role
        </label>
        <input
          type="text"
          className="form-control"
          name="role"
          placeholder="Role"
          value={Role}
          onChange={e=>setRole(e.target.value)}
          required
        />
      </div>
      <div className="col-lg-6">
        <label htmlFor="designation" className="form-label">
          Designation
        </label>
        <input
        required
          type="text"
          className="form-control"
          name="designation"
          placeholder="Designation"
          value={Designation}
          onChange={e=>setDesignation(e.target.value)}
        />
      </div>
      <div className="col-lg-6">
        <label htmlFor="responsibilities" className="form-label">
          Responsibilities
        </label>
        <input
        required
          type="text"
          className="form-control"
          name="responsibilities"
          placeholder="Responsibilities"
          value={Responsibilities}
          onChange={e=>setResponsibilities(e.target.value)}
        />
      </div>
      <div className="col-lg-6">
        <label htmlFor="hiredDate" className="form-label">
          HiredDate
        </label>
        <input
        required
          type="text"
          className="form-control"
          name="hiredDate"
          placeholder="hiredDate"
          value={hiredDate}
          onChange={e=>sethiredDate(e.target.value)}
        />
      </div>
      <br/>
      <br/>
      <div>
        <button type="submit" className="btn btn-success">
          {" "}
          Submit{" "}
        </button>&nbsp;&nbsp;&nbsp;       
      </div>
    </Form>
    </div> 
  )
}
export default EmployeeCreate;