import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// component imports
import { DeleteDialogFormComponent } from './delete-dialog-form/delete-dialog-form.component';
import { EditDialogFormComponent } from './edit-dialog-form/edit-dialog-form.component';

// shared module imports
import { MaterialModule } from './shared/material-module';

@NgModule({
  declarations: [
    AppComponent,
    EditDialogFormComponent,
    DeleteDialogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
