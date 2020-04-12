import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {DataService} from '../data.service';
import {FormControl, Validators} from '@angular/forms';
import {Model} from '../model';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../add/add.component.html',
  styleUrls: ['../add/add.component.css']
})

export class AddComponent {
  constructor(public dialogRef: MatDialogRef<AddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Model,
              public dataService: DataService) { }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
  }

  submit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addData(this.data);
  }
}
