package com.example.SpringWebProject.ReactSpringEmp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringWebProject.ReactSpringEmp.exception.ResourceNotFoundException;
import com.example.SpringWebProject.ReactSpringEmp.model.Employee;
import com.example.SpringWebProject.ReactSpringEmp.repository.EmployeeRepository;

//@CrossOrigin(origins = {"http://localhost:8080","http://localhost:3000"})
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController 
{
	@Autowired
	private EmployeeRepository employeeRepository;
	
	// get all employees
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/employees")
	public List<Employee> getAllEmployees()
	{
		return employeeRepository.findAll();
	}
	
	// create employee rest api
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/employees")
	public  Employee createEmployee(@RequestBody Employee employee)
	{
		return employeeRepository.save(employee);
		
	}
	
	
	//get employee by id
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee>  getEmployeeById(@PathVariable Long id)
	{
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee not found with this id   "+id));
		return ResponseEntity.ok(employee);
	}

	//update employee rest api
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody  Employee employee)
	{
		Employee empDetails = employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee not found with this id   "+id));
		
		empDetails.setFirstName(employee.getFirstName());
		empDetails.setLastName(employee.getLastName());
		empDetails.setEmailId(employee.getEmailId());
		
		Employee updatedEmployee = employeeRepository.save(empDetails);
		
		return ResponseEntity.ok(updatedEmployee); 
	}
	
	
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable long id)
	{
		Employee empDetails = employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee not found with this id   "+id));
		
		
		employeeRepository.delete(empDetails);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
		
	}
}
