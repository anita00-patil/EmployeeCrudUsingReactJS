import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


 function Update() {
    const {id} = useParams();

   

    useEffect(() => {
        // props.fetchAllEmployees();
        axios.get("http://localhost:5030/api/Employees/" + id).then(response=>{
            console.log(response)
            setemployeeId(response.data.employeeId);
            setname(response.data.name);
            setband(response.data.band);
            setrole(response.data.role);
            setdesignation(response.data.designation);
            setresponsibilities(response.data.responsibilities);
            sethiredDate(response.data.hiredDate);
        })
        .catch(error=>{console.log(error)})
      }, []);

    const [employeeId,setemployeeId] = useState("");
    const [name,setname] = useState("");
    const [band,setband] = useState("");
    const [role,setrole] = useState("");
    const [designation,setdesignation] = useState("");
    const [responsibilities,setresponsibilities] = useState("");
    const [hiredDate,sethiredDate] = useState("");
    const navigate=useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const updateData = {employeeId:employeeId, name:name, band:band,role:role,designation:designation,responsibilities:responsibilities,hiredDate:hiredDate}
        axios.put("http://localhost:5030/api/Employees/" + id,updateData).then((result)=>{
          swal({
            title: "Great!",
            text: "Updated!",
            icon: "success",
            button: "Done",
          });
            console.log(result.data);navigate("/")
        }) 
        
        .catch(error=>console.log(error))
    }
     

  return (
    
    <div className='row'>
      <h2 className='text-primary'>
      Update the Deatils of Employee..
    </h2>
    <form  onSubmit={handleSubmit} >
        <div className="col-lg-6">
        <label htmlFor="employeeId" className="form-label">
          EmployeeId
        </label>
        <input
        required
          type="text"
          className="form-control"
          name="employeeId"
          placeholder="employeeId"
          value={employeeId}
          onChange={e=>setemployeeId(e.target.value)}
        />
       </div>
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
          value={name}
          onChange={e=>setname(e.target.value)}
          
        />
      </div>
      <div className="col-lg-6">
        <label htmlFor="band" className="form-label">
          Band
        </label>
        <input
        required
          type="text"
          className="form-control"
          name="band"
          placeholder="band"
          value={band}
          onChange={e=>setband(e.target.value)}
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
          placeholder="role"
          value={role}
          onChange={e=>setrole(e.target.value)}
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
          value={designation}
          onChange={e=>setdesignation(e.target.value)}
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
          value={responsibilities}
          onChange={e=>setresponsibilities(e.target.value)}
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
      <div>
        <br/>
        <button type="submit" className="btn btn-dark">
          
          Update{" "}
        </button>
        
      </div>
    </form>
    </div>
  )
}
export default Update;