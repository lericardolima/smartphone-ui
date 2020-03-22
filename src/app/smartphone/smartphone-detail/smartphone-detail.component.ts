import { Component, OnInit } from '@angular/core';
import { Smartphone } from 'src/app/model/smartphone.model';
import { Router } from '@angular/router';
import { SmartphoneService } from '../smartphone.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-smartphone-detail',
  templateUrl: './smartphone-detail.component.html',
  styleUrls: ['./smartphone-detail.component.scss']
})
export class SmartphoneDetailComponent implements OnInit {

  smartphone: Smartphone;

  constructor(private router: Router,
    private smartphoneService: SmartphoneService,
    private location: Location) {
    const href = this.router.getCurrentNavigation().extras.state.href;
    console.log(href)
    this.smartphoneService.get(href)
      .subscribe((result) => {
        console.log(result)
        this.smartphone = result;
      });

  }

  ngOnInit(): void { }

  back(): void {
    this.location.back();
  }
}
