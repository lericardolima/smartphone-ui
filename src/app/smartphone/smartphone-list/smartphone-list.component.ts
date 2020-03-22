import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from '../smartphone.service';
import { Smartphone } from 'src/app/model/smartphone.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-smartphone-list',
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.scss']
})
export class SmartphoneListComponent implements OnInit {

  search = new FormControl();
  filteredSmartphones: Smartphone[] = []
  smartphones: Smartphone[] = [];

  constructor(private smartphoneService: SmartphoneService) { }

  ngOnInit(): void {
    this.smartphoneService.list()
    .subscribe((result) => {
      console.log(result)
      this.smartphones = result;
      this.filteredSmartphones = this.smartphones;
    })
  }

  find(query:string): void {
    this.filteredSmartphones = this.smartphones
      .filter(smartphone => smartphone.model.toLowerCase().includes(query.toLowerCase()) || query === '');
  }

}
