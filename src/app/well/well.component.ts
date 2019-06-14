import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WellListComponent } from '../well-list/well-list.component';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {
  @Output() output = new EventEmitter<Well>();

  wellForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.wellForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      source: ['', Validators.required]
    });
  }

  submitForm(formWell : Well) {
    console.log("Form Submitted sucessfully" + formWell);
    this.output.emit(formWell);
  }
}

interface Well {
  name: String;
  type: String;
  source: number;
}