import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppServiceService } from '../app-service.service';
import { DialogData } from '../app.component';

@Component({
  selector: 'app-delete-dialog-form',
  templateUrl: './delete-dialog-form.component.html',
  styleUrls: ['./delete-dialog-form.component.css']
})
export class DeleteDialogFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private appService:AppServiceService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.appService.deleteElement(this.data).subscribe((res)=>{
      debugger;
      console.log(res);
      
    });
    this.dialogRef.close();
  }

}
