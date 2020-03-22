import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from '../smartphone.service';
import { Smartphone } from 'src/app/model/smartphone.model';

@Component({
  selector: 'app-smartphone-list',
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.scss']
})
export class SmartphoneListComponent implements OnInit {

  smartphones: Smartphone[] = [];

  constructor(private smartphoneService: SmartphoneService) { }

  ngOnInit(): void {
    this.smartphoneService.list()
    .subscribe((result) => {
      this.smartphones = result;
    })
  }

}
