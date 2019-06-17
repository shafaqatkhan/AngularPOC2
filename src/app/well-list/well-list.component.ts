import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {
  wells: Well[] = null;
  parentSrcKey: Number;
  constructor() {
    this.wells = [{
      name: "shafaqat",
      type: "CS",
      source: 10011
    }, {
      name: "Varun",
      type: "MS",
      source: 1001
    }, {
      name: "Mohit",
      type: "QA",
      source: 1210
    }, {
      name: "shikhar",
      type: "Dev",
      source: 1111
    }, {
      name: "gulab",
      type: "Dev",
      source: 1001
    }, {
      name: "Nages",
      type: "MS",
      source: 1001
    }]
  }

  ngOnInit() {
  }

  parentMethod($event) {
    this.wells.push($event);
  }

  updateSrcKey(srcKey) {
    console.log(srcKey.innerHTML);
    this.parentSrcKey = srcKey.innerHTML;
  }

}
interface Well {
  name: String;
  type: String;
  source: number;
}
