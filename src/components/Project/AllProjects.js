import React, {Component} from 'react';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';

class AllProjects extends Component
{
    state = {
        projects : []
    }

    
    componentDidMount(){
        const URL = "https://akkiapp.herokuapp.com/project/viewall";
        Axios.get(URL).then(response => response.data)
        .then((data)=>{
            this.setState({projects : data});
            console.log(this.state.projects);
        });
    }

    render(){
        return(
            <div className="row" style={{backgroundColor:"white",padding : "10px"}}>
                <div className="col-md-12">
                        
                    <Table className="col-md-12" responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Project Head</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.projects.map(row =>
                                    (
                                        <tr key={row.id}>
                                            <td>{row.id}</td>
                                            <td>{row.name}</td>
                                            <td>{row.description}</td>
                                            <td>{row.project_head.id}</td>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </Table>
            
                </div>
            </div>
        )
    }
}

export default AllProjects;