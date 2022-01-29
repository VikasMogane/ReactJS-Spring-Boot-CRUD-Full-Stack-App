import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';
import { Routes, Route, Outlet,Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



class ListEmployeeComponent extends Component {
    
    constructor(props)
    {
        super(props)

        this.state = {
            employees:[]
        }
        this.addEmployee    = this.addEmployee.bind(this);
        this.editEmployee   = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
   
    componentDidMount()
    {
        EmployeeService.getEmployees().then((res)=>{

            this.setState({employees: res.data})
        })
    }

  //  addEmployee()
   // { 
        //this.props.history.push('/add-employee');
       //useNavigate(); navigate('/add-employee');
      // this.props.history.push({  pathname: '/add-employee'});
     //  navigate("/add-employee");

   // }

   
    deleteEmployee(id)
    {
        console.log('start'+id);
    
        EmployeeService.deleteEmployee(id).then((res)=>{

            this.setState({employees:this.state.employees.filter(employee => employee.id !==id)});
        })
    }

    editEmployee(id)
    {
        console.log('start'+id);
        //this.setState({redirect:'/updateemployee/${id}'});
      // this.setState({redirect:"/addemployee"});
       // window.location.assign('/updateemployee/${id}');
       
        window.location.assign("/updateemployee");
        console.log('end'+id);
    }


   addEmployee() 
    {
        
         //let { CreateEmployeeComponent } = useParams();
        //return <h1>CreateEmployeeComponent{CreateEmployeeComponent}</h1>;
        this.setState({redirect:"/addemployee"});
    }
    render() {
        return (
            <div>
                
                <h2 className='text-center'> Employees List</h2>
                <div className="row">
              {/* <button style={{width:"126px"}} className="btn btn-primary"  onClick={this.addEmployee}>Add Employee</button> */}
                <Link style={{width:"126px"}}  to="/addemployee" className="btn btn-primary">Add Employee</Link>


                </div>
                <div className='row'>
                    <table class="table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>

                        </tr>

                        </thead>

                        <tbody>

                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key ={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                      <td> 
                                      {/* onClick={() => this.editEmployee(employee.id)}  */}
                                      {/* <button onClick={() =>this.editEmployee(employee.id)}   className="btn btn-info"  style={{ backgroundColor: "#0dcaf0"}}>Update</button> */}
                                      <Link style={{ backgroundColor: "#0dcaf0"}} to={"/updateemployee/"+employee.id} className="btn btn-info" >Update</Link>
                                      <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>

                                      </td>
                                    </tr>
                                )

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;