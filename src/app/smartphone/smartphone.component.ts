import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.scss']
})
export class SmartphoneComponent implements OnInit {

  appName = 'Claro Smartphones';

  constructor() { }

  ngOnInit(): void {
  }

}
