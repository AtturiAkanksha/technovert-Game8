import { Component, Input, OnInit } from '@angular/core';
import {DataService} from '../../data.service'
import { FormArray,FormControl,FormBuilder, FormGroup,Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';

declare var window:any;

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})

export class CardContainerComponent implements OnInit{
  inputText!: string;
  allEmployees:Employee=[];
  card: any;
  imagepath:any;
  regForm!: FormGroup;
  formModal:any;
  searchText:string=''; 
  filteredEmployees=[] ;

  constructor(private dataservice:DataService, private fb:FormBuilder){
    this.dataservice.employeeDataSubject.subscribe((value)=>
    this.allEmployees=value);
    this.regForm= new FormGroup(
      {
        firstname:new FormControl(),
        lastname:new FormControl(),
        email:new FormControl(),
        skypeid:new FormControl(),
        jobtitle:new FormControl(),
        department:new FormControl(),
        phonenumber:new FormControl(),
        office:new FormControl(),
      }
    );
    this.imagepath='';
    localStorage.setItem('session',JSON.stringify(this.getEmployeesFromService));
  }
  ngOnInit():void{
    this.getEmployeesFromService();
    this.formModal=new window.bootstrap.Modal(
      document.getElementById("editForm")   
    );
  }
  getEmployeesFromService(){
    this.dataservice.getEmployees()
  }
  
  openModal(){
    this.formModal.show();
  }

  closeModal(){
    this.formModal.hide();
  }
}
type Employee=Array<{id:number;firstname:string;lastname:string; jobtitle:string; department:string;email:string;office:string;phonenumber:number;skypeid:any}>;
