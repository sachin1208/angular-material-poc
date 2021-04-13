import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppServiceService } from './app-service.service';
import { User } from './app-types';
import { DialogFormComponent } from './dialog-form/dialog-form.component';


const ELEMENT_DATA: User[] = [];
export interface DialogData {
  animal: string;
  name: string;
} 

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
  animal: string='';
  name: string='';

  constructor(private appService: AppServiceService, public dialog: MatDialog){
    this.appService.fetchData()
            .subscribe(
                products => {
                    this.dataSource = products;
                    this.checkUsers(products);
                },
                error => this.errorMessage = error);   
  }

  openDialog(element:any): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      data: {name: this.name, animal: this.animal},
      width: "1220px",
      height:"600px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  toggle(){
    this.expanded=!this.expanded
  }
 
  callDummy(element:User){
    this.appService.deleteElement(element);   
  }

  checkUsers(products:User[]){
    for (const element of products) {
      let gender=element.gender.toUpperCase();
      if(gender==="MALE"){
        this.maleUsers+=1
      }else if(gender==="FEMALE"){
        this.femaleUsers+=1
      }   
    }  
  }
  
}
