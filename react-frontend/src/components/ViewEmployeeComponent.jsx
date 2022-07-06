import React, {useEffect, useState} from 'react';
import EmployeeService from "../services/EmployeeService";

function ViewEmployeeComponent(props) {
  const [id] = useState(props.match.params.id);
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then(res => {
      setEmployee(res.data)
    });
  }, []);

  return (
    <div>
      <br></br>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <label style={{width: "180px"}}>Employee First Name: </label>
            <div style={{width: "fit-content"}}>{employee.firstName}</div>
          </div>
          <div className="row">
            <label style={{width: "180px"}}>Employee Last Name: </label>
            <div style={{width: "fit-content"}}>{employee.lastName}</div>
          </div>
          <div className="row">
            <label style={{width: "180px"}}>Employee Email ID: </label>
            <div style={{width: "fit-content"}}>{employee.emailId}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployeeComponent;