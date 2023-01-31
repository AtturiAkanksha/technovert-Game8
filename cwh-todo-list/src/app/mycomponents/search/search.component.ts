import { Component, EventEmitter, OnInit} from '@angular/core';
import { FormArray,FormControl,FormBuilder, FormGroup,Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/app/data.service';

declare var window:any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  

  constructor(private fb:FormBuilder,private dataService:DataService){ }

  myGroup!: FormGroup;
  formModal:any;
  value='';
  filteredOption:any;
  enterinput:any;
  newEmployees=[];

  ngOnInit():void{
    this.formModal=new window.bootstrap.Modal(
      document.getElementById("createForm")
    );
  }

  alphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  regForm= new FormGroup(
    {
      firstname:new FormControl(null,Validators.required),
      lastname:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      skypeid:new FormControl(null,Validators.required),
      jobtitle:new FormControl(null,Validators.required),
      department:new FormControl(null,Validators.required),
      phonenumber:new FormControl(null,Validators.required),
      office:new FormControl(null,Validators.required),
    }
  );
  getEmployeesFromService(){
    this.dataService.getEmployees()
  }
 
  onKeyUp(event:any){
    this.dataService.keyUpEvent(event.target.value);
  }

  clickBtnAll(event:any){
    this.dataService.clickBtnAllEvent(event);
   }

  clickAlphabet(event:any){
   this.dataService.clickAlphabetEvent(event.target.innerHTML);
  }
  
  clear(){
    this.filteredOption="firstname";
    this.enterinput=""
  }

  openModal(){
    this.formModal.show();
  }

  closeModal(){
    this.formModal.hide();
  }

  save(){  
  }

}
