import React, { Component } from 'react';
import './App.css';
import AllEmployees from './components/Employee/AllEmployees';
import AllJiras from './components/Jira/AllJiras';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

var components = {
  employees : <AllEmployees />,
  jiras : <AllJiras />
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
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Option 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Option 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Option 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Another</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {this.state.selectedComponent}
      </>
      
    );
  }
}

export default App;
