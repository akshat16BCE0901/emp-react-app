import React, {Component} from 'react';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';

class AllEmployees extends Component
{
    state = {
        employees : []
    }

    
    componentDidMount(){
        const URL = "https://akkiapp.herokuapp.com/employee/viewall";
        Axios.get(URL).then(response => response.data)
        .then((data)=>{
            this.setState({employees : data});
            console.log(this.state.employees);
        })
    }

    render(){
        return(
                
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(row =>
                                (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.firstname}</td>
                                        <td>{row.lastname}</td>
                                        <td>{row.address}</td>
                                        <td>{row.phone}</td>
                                        <td>{row.email}</td>
                                        <td>{row.date_of_birth}</td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </Table>
        
        )
    }
}

export default AllEmployees;