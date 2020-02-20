import React, { Component } from 'react';
import './App.css';

import AllEmployees from './components/Employee/AllEmployees';
import AllJiras from './components/Jira/AllJiras';
import AddEmployeeForm from './components/Employee/AddEmployeeForm';
import AddJiraForm from './components/Jira/AddJiraForm';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

var components = {
  employees : <AllEmployees />,
  jiras : <AllJiras />,
  addEmployeeForm : <AddEmployeeForm />,
  addJiraForm : <AddJiraForm />
}


class App extends Component
{

  state = {
    selectedComponent : components.employees
  }


  changeComponent = (comp) =>{
    this.setState(
      {
        selectedComponent : comp
      }
    )
  }

  render(){
    return (
      <>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Akshat Singhal App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" className="mr-auto">
              <Nav.Link onClick={() => this.changeComponent(components.employees)} >Employees</Nav.Link>
              <Nav.Link onClick={() => this.changeComponent(components.jiras)} >Jiras</Nav.Link>
              <NavDropdown title="Add" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={()=> this.changeComponent(components.addEmployeeForm)} >Employee</NavDropdown.Item>
                <NavDropdown.Item onClick={()=> this.changeComponent(components.addJiraForm)} >Jira</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Project</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className="container" style={{marginTop:"10px"}}>
          {this.state.selectedComponent}
        </div>
      </>
      
    );
  }
}

export default App;
