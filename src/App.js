import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AllEmployees from './components/Employee/AllEmployees';
import AllJiras from './components/Jira/AllJiras';
import { Button, Grid } from '@material-ui/core';

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
        <div>
          <AppBar position="static">
            <Toolbar>
              <Grid container direction="row" spacing={1} justify="flex-start">
                <Grid item xs={3}>
                  <Typography variant="h5">
                    Akshat Singhal App
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Button onClick={() => this.changeComponent(components.jiras)}  color="inherit">Jiras</Button>
                  <Button onClick={() => this.changeComponent(components.employees)} color="inherit">Employees</Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
        {this.state.selectedComponent}
      </>
      
    );
  }
}

export default App;
