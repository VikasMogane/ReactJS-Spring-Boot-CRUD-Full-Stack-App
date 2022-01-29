import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

export default class ViewEmployeeComponent extends Component {



    constructor(props)
    {
        super(props);
        this.state=
        {
            id :'23',
            employee:{}
          
           
        }
    

    }
    
    componentDidMount()
    {
        EmployeeService.getEmployeeByid(this.state.id).then((res) =>
        {

            
            this.setState({employee:res.data});
        }
        );
    }
    
    
    render() {
    return <div>
   
                                <div className='card col-md-6 offset-md-3'>
                                <h2 className='text-center'>View Employee Details</h2>


                                    <div className='card-body'>
                                        <div className='row'>
                                            <label style={{ border: "none"}} className='card col-md-3' >First Name :</label>
                                            <div style={{ border: "none"}} className='card col-md-3'>{this.state.employee.firstName}</div>
                                            
                                        </div>
                                        <div className='row'>
                                            <label style={{ border: "none"}} className='card col-md-3' >Last Name :</label>
                                            <div style={{ border: "none"}} className='card col-md-3'>{this.state.employee.lastName}</div>
                                            
                                        </div>
                                        <div className='row'>
                                            <label style={{ border: "none"}} className='card col-md-3' >Email Id :</label>
                                            <div style={{ border: "none"}} className='card col-md-6'>{this.state.employee.emailId}</div>
                                            
                                        </div>
                                    </div> 
                                </div>
                              
    </div>;
  }
}
