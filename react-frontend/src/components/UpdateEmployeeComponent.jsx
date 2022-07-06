import React, {useEffect, useState} from 'react';
import EmployeeService from "../services/EmployeeService";

function UpdateEmployeeComponent(props) {
  const [id] = useState(props.match.params.id);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then(res => {
      let employee = res.data;
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setEmailId(employee.emailId);
    });
  }, []);

  const changeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  }

  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
  }

  const changeEmailHandler = (event) => {
    setEmailId(event.target.value);
  }

  const updateEmployee = (event) => {
    event.preventDefault();
    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId
    }

    EmployeeService.updateEmployee(employee, id).then(() => {
      props.history.push("/employees");
    })
  }

  const cancel = () => {
    props.history.push("/employees");
  }

  return (
    <div>
      <div className="container">
        <div className="row col-lg-6 offset-lg-3">
          <div className="card"></div>
          <h3 className="text-center">Update Employee</h3>
          <div className="card-body">
            <form action="">
              <div className="form-group">
                <label>First Name:</label>
                <input placeholder="First Name" name="firstName" className="form-control"
                       value={firstName} onChange={changeFirstNameHandler}
                />
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input placeholder="Last Name" name="lastName" className="form-control"
                       value={lastName} onChange={changeLastNameHandler}
                />
              </div>
              <div className="form-group">
                <label>Email Address:</label>
                <input placeholder="Email Address" name="emailId" className="form-control"
                       value={emailId} onChange={changeEmailHandler}
                />
              </div>

              <button className="btn btn-success mt-2 me-2" onClick={updateEmployee}>Save</button>
              <button className="btn btn-danger mt-2" onClick={cancel}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployeeComponent;