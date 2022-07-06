package com.s4311.springbootbackend.controller;

import com.s4311.springbootbackend.exception.ResourceNotFoundException;
import com.s4311.springbootbackend.model.Employee;
import com.s4311.springbootbackend.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Resource
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody EmployeeDTO employeeDTO) {
        return employeeRepository.save(Employee.createFromDTO(employeeDTO));
    }

    @GetMapping("/employees/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));
    }

    @PutMapping("/employees/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody EmployeeDTO employeeDTO) {
        Employee previousObj = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        previousObj.setFirstName(employeeDTO.getFirstName());
        previousObj.setLastName(employeeDTO.getLastName());
        previousObj.setEmailId(employeeDTO.getEmailId());

        return employeeRepository.save(previousObj);
    }

    @DeleteMapping("/employees/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        employeeRepository.delete(employee);

        return Map.of(
                "deleted", Boolean.TRUE
        );
    }
}
