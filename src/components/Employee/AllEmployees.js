import React, {Component} from 'react';
import { Table, TableRow, TableCell,TableBody,TableHead } from '@material-ui/core';
import Axios from 'axios';

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
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontWeight:"bold"}} component="th" color="inherit"> ID</TableCell>
                        <TableCell style={{fontWeight:"bold"}} >First Name</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Last Name</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Address</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Phone</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Email</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Date of Birth</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        this.state.employees.map(row =>
                            (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.firstname}</TableCell>
                                    <TableCell>{row.lastname}</TableCell>
                                    <TableCell>{row.address}</TableCell>
                                    <TableCell>{row.phone}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.date_of_birth}</TableCell>
                                </TableRow>
                            ))
                    }
                </TableBody>
            </Table>
        )
    }
}

export default AllEmployees;