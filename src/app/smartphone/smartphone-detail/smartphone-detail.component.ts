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

  href = '';
  smartphone: Smartphone;

  constructor(private router: Router,
    private smartphoneService: SmartphoneService,
    private location: Location) {
    this.href = this.router.getCurrentNavigation()?.extras?.state?.href;
  }

  ngOnInit(): void {
    if (this.href) {
      this.smartphoneService.get(this.href)
        .subscribe((smartphone) => {
          this.smartphone = smartphone;
        });
    } else {
      this.back();
    }
  }

  back(): void {
    this.location.back();
  }
}
