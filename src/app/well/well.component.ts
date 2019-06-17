import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WellListComponent } from '../well-list/well-list.component';
import { Source } from 'webpack-sources';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {
 
  wellForm: FormGroup;
  @Output() output = new EventEmitter<Well>();
  //@Input() srcKey : Number = 111111;



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.wellForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      source: [this.srcKey, Validators.required]
    });
  }

  submitForm(formWell : Well) {
    console.log("Form Submitted sucessfully" + formWell);
    this.output.emit(formWell);
  }

  @Input() public set srcKey(srcKey: number) {
    //this.source = srcKey;
    console.log(srcKey + "Shafaqat");
      this.wellForm.controls.source.setValue(srcKey);
    }
}

interface Well {
  name: String;
  type: String;
  source: number;
}