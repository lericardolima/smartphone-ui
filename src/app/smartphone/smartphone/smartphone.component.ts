import { Component, OnInit } from '@angular/core';
import { Smartphone } from 'src/app/model/smartphone.model';
import { Color } from 'src/app/model/enums/color.enum';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.scss']
})
export class SmartphoneComponent implements OnInit {

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
