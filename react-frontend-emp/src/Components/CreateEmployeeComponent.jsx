import React, { Component } from 'react';
import { useNavigate,Link ,useParams} from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';
import CancelButton from './CancelButton';

class CreateEmployeeComponent extends Component {

    constructor(props)
    {
        super(props);
        this.state=
        {
            firstName:'',
            lastName:'',
            emailId:''    
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler  = this.changeLastNameHandler.bind(this); 
        this.changeEmailIdHandler   = this.changeEmailIdHandler.bind(this);
        this.saveEmployee           = this.saveEmployee.bind(this);

    }
    

    saveEmployee = (e)=>
    {
        e.preventDefault();
        let employee ={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
        console.log("employee"+JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res =>{
            window.location.assign("/employees");

              
        });
    }
    changeFirstNameHandler= (event) =>
    {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler= (event) =>
    {
        this.setState({lastName:event.target.value});
    }
    changeEmailIdHandler= (event) =>
    {
        this.setState({emailId:event.target.value});
    }
    cancel()
    {
        this.setState({redirect:"/employees"});
    }
   
    render() {

        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Employee</h3>
                            <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                <label >FirstName :</label>
                                <input placeholder='First Name' name='firstName' className='form-control'
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                </div>

                                <div className='form-group'>
                                <label >Last Name :</label>
                                <input placeholder='Last Name' name='lastName' className='form-control'
                                    value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                </div>


                                <div className='form-group'>
                                <label >Email Id :</label>
                                <input placeholder='Email Id' name='emaillId' className='form-control'
                                    value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                </div>
                            <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                         
                            <CancelButton/>

                            

                             {/* <li>
                                <Link to="/employees" activeClassName="CancelButton">Cancel Button
                                </Link>
                            </li> */}

                            </form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateEmployeeComponent;