import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { PeriodicElement } from './app-types';


const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  displayedColumns: string[] = ['name', 'email', 'gender', 'address', 'action'];
  dataSource = ELEMENT_DATA;
  title = 'MachineTest';
  expanded:boolean=false;
  errorMessage:any;
  maleUsers:number=0;
  femaleUsers:number=0;

  constructor(private appService: AppServiceService){
    this.appService.fetchData()
            .subscribe(
                products => {
                    this.dataSource = products;
                    this.checkUsers(products);
                },
                error => this.errorMessage = error);
    
  }

  toggle(){
    this.expanded=!this.expanded
  }
 
  callDummy(element:any){
    this.appService.deleteElement(element);
    
  }

  checkUsers(products:any){
    for (const element of products) {
      console.log(element);
      let gender=element.gender.toUpperCase();
      if(gender==="MALE"){
        this.maleUsers+=1
      }else if(gender==="FEMALE"){
        this.femaleUsers+=1
      }
      
    }
    console.log(this.femaleUsers+"and "+this.maleUsers);
    
  }
  
}
