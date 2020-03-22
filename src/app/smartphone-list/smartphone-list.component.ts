import { Component, OnInit } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { Color } from '../model/enums/color.enum';

@Component({
  selector: 'app-smartphone-list',
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.scss']
})
export class SmartphoneListComponent implements OnInit {

  smartphone: Smartphone = {
    code: 'SMT12345',
    model: 'Smart I',
    price: 2599.99,
    brand: 'MyPhone',
    photo: 'https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620',
    startDate: new Date('2020-01-01'),
    endDate: new Date('2022-01-01'),
    color: Color.BLACK
  };

  constructor() { }

  ngOnInit(): void {
  }

}
