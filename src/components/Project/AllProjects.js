import React, {Component} from 'react';
import Axios from 'axios';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css'

class AllProjects extends Component
{
    state = {
        projects : [],
        filteredProjectsList : [],
        columnsHeaders : [
            {headerName : "ID", field : "id"},
            {headerName : "Name", field : "name"},
            {headerName : "Description", field : "description"},
            {headerName : "Project Head", field : "project_head"}
        ]
    }

    
    componentDidMount(){
        const URL = "https://akkiapp.herokuapp.com/project/viewall";
        Axios.get(URL).then(response => response.data)
        .then((data)=>{
            this.setState({projects : data});
            console.log(this.state.projects);
            var a = [];
            this.state.projects.forEach(row => {
                var data_refine = {
                    "id" : row.id,
                    "name" : row.name,
                    "description" : row.description,
                    "project_head" : row.project_head.firstname+' '+row.project_head.lastname
                }
                a.push(data_refine);
            });
            this.setState({filteredProjectsList : a});
            console.log(this.state.filteredProjectsList);
        });
    }

    render(){
        return(
            <div className="row" style={{backgroundColor:"white",padding : "10px"}}>
                <div className="col-md-12">
                        
                    {/* <Table className="col-md-12" responsive striped bordered hover>
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
                                            <td>{row.project_head.firstname+ ' '+row.project_head.lastname}</td>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </Table> */}
                    <div className="ag-theme-balham" style={{width : "1000px",height : "500px"}}>
                        <AgGridReact
                            columnDefs={this.state.columnsHeaders}
                            rowData={this.state.filteredProjectsList}>
                        </AgGridReact>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default AllProjects;