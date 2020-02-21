import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
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
            <Table responsive hover striped bordered>
                <thead>
                    <tr>
                        <th> ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Story Points</th>
                        <th>Project</th>
                        <th>Sprint</th>
                        <th>Assignee</th>
                        <th>Assigned To</th>
                        <th>Date Created</th>
                        <th>Status</th>
                        <th>Date Ended</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.jiras.map(row =>
                            (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.title}</td>
                                    <td>{row.description}</td>
                                    <td>{row.priority}</td>
                                    <td>{row.story_points}</td>
                                    <td>{row.project_id}</td>
                                    <td>{row.sprint}</td>
                                    <td>{row.assignee.id}</td>
                                    <td>{row.assigned_to.id}</td>
                                    <td>{row.date_created}</td>
                                    <td>{row.status}</td>
                                    <td>{row.date_ended!=null?row.date_ended:"----"}</td>
                                </tr>
                                
                            ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default AllJiras;