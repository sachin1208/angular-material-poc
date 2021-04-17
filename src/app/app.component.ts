import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AppServiceService } from './app-service.service';
import { User } from './app-types';
import { DeleteDialogFormComponent } from './delete-dialog-form/delete-dialog-form.component';
import { EditDialogFormComponent } from './edit-dialog-form/edit-dialog-form.component';



export interface DialogData {
  id: number;
  name: string;
  email: string;
  gender: string;
  address: string;
  dob: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  displayedColumns: string[] = ['name', 'email', 'gender', 'address', 'action'];
  dataSource: User[] = [];
  title = 'MachineTest';
  expanded: boolean = false;
  errorMessage: any;
  maleUsers: number = 0;
  femaleUsers: number = 0;


  constructor(private appService: AppServiceService, public dialog: MatDialog) {
    this.fetchUsers();
  }

  openEditDialog(element: User): void {
    const dialogRef = this.dialog.open(EditDialogFormComponent, {
      data: element,
      width: "1220px",
      height: "600px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Edit dialog was closed');
      this.fetchUsers();
    });
  }

  openDeleteDialog(element: any): void {
    const dialogRef = this.dialog.open(DeleteDialogFormComponent, {
      data: element,
      width: "400px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Delete dialog was closed');
      this.fetchUsers();
    });
  }

  toggle() {
    this.expanded = !this.expanded
  }

  checkUsers(products: User[]) {
    for (const element of products) {
      let gender = element.gender.toUpperCase();
      if (gender === "MALE") {
        this.maleUsers += 1
      } else if (gender === "FEMALE") {
        this.femaleUsers += 1
      }
    }
  }

  fetchUsers() {
    this.appService.fetchData()
      .subscribe(
        products => {
          this.dataSource = products;
          this.checkUsers(products);
        },
        error => this.errorMessage = error);
  }

}
