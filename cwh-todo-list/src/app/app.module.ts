import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './mycomponents/search/search.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { FiltersComponent } from './mycomponents/filters/filters.component';
import { RouterModule,Routes } from '@angular/router';
import { NotfoundComponent } from './mycomponents/notfound/notfound.component';
import { TestService } from './test.service';
import { TestPipe } from './test.pipe';
import { CreateComponent } from './mycomponents/create/create.component';
import { EditComponent } from './mycomponents/edit/edit.component';
import { EmployeesComponent } from './mycomponents/employees/employees.component';



const routes:Routes=[
  {
    path:'header',component:HeaderComponent
  },

  
  {
    path:'filters',component:FiltersComponent
  },
  {
    path:'search',component:SearchComponent
  },
  {
    path:'employees',component:EmployeesComponent
  },
  {
    path:'create',component:CreateComponent
  },
  {
    path:'edit',component:EditComponent
  },
  {
    path:"**",component:NotfoundComponent
  },

]



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    FiltersComponent, 
    NotfoundComponent,
    TestPipe,
    EmployeesComponent,
    CreateComponent,
    EditComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
