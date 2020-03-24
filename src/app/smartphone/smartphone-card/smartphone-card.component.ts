import { Component, OnInit, Input } from '@angular/core';
import { Smartphone } from 'src/app/smartphone/smartphone.model';

import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-smartphone-card',
  templateUrl: './smartphone-card.component.html',
  styleUrls: ['./smartphone-card.component.scss']
})
export class SmartphoneCardComponent implements OnInit {

  @Input() smartphone: Smartphone;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDetails(): void {
    const navigationExtras: NavigationExtras = {
      state: {
          href: this.smartphone._links.self.href
      },
  };
    this.router.navigate(['/details'], navigationExtras);
  }

}
