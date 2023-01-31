import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imagepath:any;

  constructor(){
    this.imagepath='/assets/images/th (2).jpg/'
  }
}
