import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogFormComponent } from './delete-dialog-form.component';

describe('DeleteDialogFormComponent', () => {
  let component: DeleteDialogFormComponent;
  let fixture: ComponentFixture<DeleteDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDialogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
