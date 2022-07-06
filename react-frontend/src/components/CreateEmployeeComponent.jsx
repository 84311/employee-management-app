import React, {Component} from 'react';
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailId: ""
    }

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  changeFirstNameHandler = (event) => {
    this.setState({
      firstName: event.target.value
    });
  }

  changeLastNameHandler = (event) => {
    this.setState({
      lastName: event.target.value
    });
  }

  changeEmailHandler = (event) => {
    this.setState({
      emailId: event.target.value
    });
  }

  saveEmployee = (event) => {
    event.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId
    }

    EmployeeService.createEmployee(employee).then(() => {
      this.props.history.push("/employees");
    });
  }

  cancel() {
    this.props.history.push("/employees");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row col-lg-6 offset-lg-3">
            <div className="card"></div>
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form action="">
                <div className="form-group">
                  <label>First Name:</label>
                  <input placeholder="First Name" name="firstName" className="form-control"
                         value={this.state.firstName} onChange={this.changeFirstNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input placeholder="Last Name" name="lastName" className="form-control"
                         value={this.state.lastName} onChange={this.changeLastNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address:</label>
                  <input placeholder="Email Address" name="emailId" className="form-control"
                         value={this.state.emailId} onChange={this.changeEmailHandler}
                  />
                </div>

                <button className="btn btn-success mt-2 me-2" onClick={this.saveEmployee}>Save</button>
                <button className="btn btn-danger mt-2" onClick={this.cancel}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;