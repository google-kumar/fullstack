import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

   employees:Employee[]=[];
  //   {
  //     id:"101",
  //     name:"john",
  //     email:"john@gmail.com",
  //     phone:9698090523,
  //     salary:50000,
  //     department:"IT"
  //   },
  //   {
  //     id:"102",
  //     name:"jai",
  //     email:"jai@gmail.com",
  //     phone:9698094523,
  //     salary:90000,
  //     department:"Testing"
  //   },
  //   {
  //     id:"103",
  //     name:"jelci",
  //     email:"jelci@gmail.com",
  //     phone:9698094525,
  //     salary:80000,
  //     department:"Developer"
  //   }
  // ];
  constructor(private employeesService:EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getAllEMployees()
    .subscribe({
      next:(employees)=>{
        this.employees=employees;
        //console.log(employees);
      },
      error:(response)=>{
        console.log(response);
      }
    })
      }

}
