import { Component, OnInit, Input } from '@angular/core';
import { Smartphone } from 'src/app/model/smartphone.model';

@Component({
  selector: 'app-smartphone-card',
  templateUrl: './smartphone-card.component.html',
  styleUrls: ['./smartphone-card.component.scss']
})
export class SmartphoneCardComponent implements OnInit {

  @Input() smartphone: Smartphone;

  constructor() { }

  ngOnInit(): void {
  }

}
