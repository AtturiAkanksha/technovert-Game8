import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  filteredEmployees:any;
 
  constructor() {
    this.employeeDataSubject.next(this.employees)
   }
  public employeeDataSubject= new Subject<Employee>();

  
  employees: Employee = [
    { id: 1, firstname: "anthony", lastname: "morris", jobtitle: "sharepoint practice head", department: "IT department", email: "anthonymorris@gmail.com", office: "India", phonenumber: 8745630218, skypeid: "live:anthonymorris" },
    { id: 2, firstname: "helen", lastname: "zimmerman", jobtitle: "operations manager", department: "IT department", email: "anthonymorris@gmail.com", office: "India", phonenumber: 8745630218, skypeid: "live:anthonymorris" },
    { id: 3, firstname: "jonathon", lastname: "smith", jobtitle: "product manager", department: "IT department", email: "anthonymorris@gmail.com", office: "India", phonenumber: 8745630218, skypeid: "live:anthonymorris" },
    { id: 4, firstname: "tami", lastname: "hopkins", jobtitle: "lead engineer", department: "IT department", email: "anthonymorris@gmail.com", office: "India", phonenumber: 8745630218, skypeid: "live:anthonymorris" },
    { id: 5, firstname: "franklin", lastname: "humark", jobtitle: "network engineer", department: "IT department", email: "anthonymorris@gmail.com", office: "seattle", phonenumber: 8745630218, skypeid: "live:anthonymorris" },
    { id: 6, firstname: "angela", lastname: "bailey", jobtitle: "talent manager", department: "HR department", email: "anthonymorris@gmail.com", office: "seattle", phonenumber: 8745630218, skypeid: "live:anthonymorris" },
    { id: 7, firstname: "robert", lastname: "mitchell", jobtitle: "software engineer", department: "IT department", email: "anthonymorris@gmail.com", office: "seattle", phonenumber: 8745630218, skypeid: "live:anthonymorris" },
    { id: 8, firstname: "olivia", lastname: "watson", jobtitle: "UI designer", department: "UX department", email: "anthonymorris@gmail.com", office: "seattle", phonenumber: 8745630218, skypeid: "live:anthonymorris" },
  ];

  getEmployees(){
    this.employeeDataSubject.next(this.employees);
  }

  clickBtnAllEvent(alphabet:any){
    this.employeeDataSubject.next(this.employees);
  }
  clickAlphabetEvent(alphabet:any){
    console.log(alphabet);
    this.filteredEmployees= this.employees.filter(  
      (emp)=>emp.firstname.startsWith(alphabet.toLowerCase())||
    emp.lastname.startsWith(alphabet.toLowerCase()));
    this.employeeDataSubject.next(this.filteredEmployees);
  }
   
  keyUpEvent(data: string) {
      this.filteredEmployees= this.employees.filter(  
        (emp)=>emp.firstname.includes(data)||
      emp.lastname.includes(data));
      this.employeeDataSubject.next(this.filteredEmployees);
      console.log(this.filteredEmployees.length);
    } 

  clickDeptEvent(data:any){
    this.filteredEmployees= this.employees.filter(  
      (emp)=>emp.department.includes(data));
    this.employeeDataSubject.next(this.filteredEmployees);
  }

  clickOfficeEvent(data:any){
    this.filteredEmployees= this.employees.filter(  
      (emp)=>emp.office.includes(data));
    this.employeeDataSubject.next(this.filteredEmployees);
  }

  clickJobEvent(data:any){
    this.filteredEmployees= this.employees.filter(  
      (emp)=>emp.jobtitle.includes(data));
    this.employeeDataSubject.next(this.filteredEmployees);
  }
}

type Employee = Array<{ id: number; firstname: string; lastname: string; jobtitle: string; department: string; email: string; office: string; phonenumber: number; skypeid: any }>;