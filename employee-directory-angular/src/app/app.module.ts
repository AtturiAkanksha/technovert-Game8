import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './mycomponents/search/search.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { FiltersComponent } from './mycomponents/filters/filters.component';
import { RouterModule,Routes } from '@angular/router';
import { DataService } from './data.service';
import { DataPipe } from './data.pipe';
import { CreateComponent } from './mycomponents/create/create.component';
import { CardContainerComponent } from './mycomponents/card-container/card-container.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


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
    path:'card-container',component:CardContainerComponent
  },
  {
    path:'create',component:CreateComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    FiltersComponent,
    DataPipe,
    CardContainerComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
