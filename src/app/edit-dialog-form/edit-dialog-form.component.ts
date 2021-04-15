import { Component, Inject, OnInit,Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../app.component';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './edit-dialog-form.component.html',
  styleUrls: ['./edit-dialog-form.component.css']
})
export class EditDialogFormComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  constructor( fb: FormBuilder, public dialogRef: MatDialogRef<EditDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
      this.options = fb.group({
        hideRequired: this.hideRequiredControl,
        floatLabel: this.floatLabelControl,
      });
    }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
