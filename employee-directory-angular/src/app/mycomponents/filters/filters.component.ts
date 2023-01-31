import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  constructor(private dataService:DataService){}
  isShow=false;

  departments=['MD','IT','HR','sales'];

  offices=['India','seattle'];

  jobTitles=['software engineer','UI designer','product manager','talent manager','network engineer','lead engineer'];

  moreJobs=['SharePoint practise Head','dotNet Development Lead','Recruiting Expert','BI Developer','OperationsManager'];

  viewContent(){
    this.isShow=!this.isShow;
  }

  clickDept(event:any){
    this.dataService.clickDeptEvent(event.target.innerHTML);
  }

  clickOffice(event:any){
    this.dataService.clickOfficeEvent(event.target.innerHTML);
  }

  clickJob(event:any){
    this.dataService.clickJobEvent(event.target.innerHTML);
  }
 
}
