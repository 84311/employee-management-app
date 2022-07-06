package com.s4311.springbootbackend.controller;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class EmployeeDTO {
    private String firstName;
    private String lastName;
    private String emailId;
}
