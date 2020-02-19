import React, {Component} from 'react';
import { Table, TableRow, TableCell,TableBody,TableHead } from '@material-ui/core';
import Axios from 'axios';

class AllJiras extends Component
{
    state = {
        jiras : []
    }

    componentDidMount(){
        const URL = "https://akkiapp.herokuapp.com/jira/viewall";
        Axios.get(URL).then(response => response.data)
        .then((data)=>{
            this.setState({jiras : data});
            console.log(this.state.jiras);
        })
    }

    render(){
        return(
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontWeight:"bold"}} component="th" color="inherit"> ID</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Title</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Description</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Priority</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Story Points</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Project</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Sprint</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Assignee</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Assigned To</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Date Created</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Status</TableCell>
                        <TableCell style={{fontWeight:"bold"}}>Date Ended</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        this.state.jiras.map(row =>
                            (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.title}</TableCell>
                                    <TableCell>{row.description}</TableCell>
                                    <TableCell>{row.priority}</TableCell>
                                    <TableCell>{row.story_points}</TableCell>
                                    <TableCell>{row.project.id}</TableCell>
                                    <TableCell>{row.sprint}</TableCell>
                                    <TableCell>{row.assignee.id}</TableCell>
                                    <TableCell>{row.assigned_to.id}</TableCell>
                                    <TableCell>{row.date_created}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                    <TableCell>{row.date_ended!=null?row.date_ended:"----"}</TableCell>
                                </TableRow>
                                
                            ))
                    }
                </TableBody>
            </Table>
        )
    }
}

export default AllJiras;