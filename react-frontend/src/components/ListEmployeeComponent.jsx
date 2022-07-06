import React, {Component} from 'react';
import employeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    }

    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }

  componentDidMount() {
    employeeService.getEmployees().then(res => (
      this.setState({
        employees: res.data
      })
    ));
  }

  addEmployee() {
    this.props.history.push("/add-employees");
  }

  editEmployee(id) {
    this.props.history.push(`/update-employees/${id}`);
  }

  deleteEmployee(id) {
    employeeService.deleteEmployee(id).then(() => {
      this.setState({
        employees: this.state.employees.filter(e => e.id !== id)
      })
    });
  }

  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <button className="btn btn-primary w-25 mb-1" onClick={this.addEmployee}>Add Employee</button>
          <table className="table table-striped table-bordered">
            <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.employees.map(employee =>
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info m-1">Update</button>
                    <button onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger m-1">
                      Delete
                    </button>
                    <button onClick={() => this.viewEmployee(employee.id)} className="btn btn-info m-1">View</button>
                  </td>
                </tr>
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;