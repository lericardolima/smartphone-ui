import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from '../smartphone.service';
import { Smartphone } from 'src/app/model/smartphone.model';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smartphone-list',
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.scss']
})
export class SmartphoneListComponent implements OnInit {

  search = new FormControl();
  smartphones: Smartphone[] = [];

  constructor(private smartphoneService: SmartphoneService,
    private router: Router) { }

  ngOnInit(): void {
    this.smartphoneService.list()
      .subscribe((smartphones) => {
        this.smartphones = smartphones;
      })
  }

  find(q: string): void {
    this.smartphoneService.query(q)
      .subscribe((smartphones) => {
        this.smartphones = smartphones;
      })
  }

  new(): void {
    this.router.navigate(['/new']);
  }
}
