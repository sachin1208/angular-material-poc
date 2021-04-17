import { Component, Inject, OnInit,Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppServiceService } from '../app-service.service';
import { DialogData } from '../app.component';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './edit-dialog-form.component.html',
  styleUrls: ['./edit-dialog-form.component.css']
})
export class EditDialogFormComponent implements OnInit {
  profileForm: FormGroup;
  constructor( fb: FormBuilder, public dialogRef: MatDialogRef<EditDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private appService: AppServiceService) { 
      this.profileForm = fb.group({
        name: new FormControl(this.data.name),
        email:new FormControl(this.data.email),
        address:new FormControl(this.data.address),
        gender: new FormControl(this.data.gender),
        datePicker: new FormControl(new Date(this.data.dob)),
      });
    }

  ngOnInit(): void {
  }
  onNoClick(): void {
    
    this.dialogRef.close();

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.appService.updateElement(this.profileForm.value).subscribe()
    console.log(this.profileForm.value);
  }
}
