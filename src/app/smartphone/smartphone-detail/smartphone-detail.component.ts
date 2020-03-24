import { Component, OnInit } from '@angular/core';
import { Smartphone } from 'src/app/smartphone/smartphone.model';
import { Router } from '@angular/router';
import { SmartphoneService } from '../smartphone.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-smartphone-detail',
  templateUrl: './smartphone-detail.component.html',
  styleUrls: ['./smartphone-detail.component.scss']
})
export class SmartphoneDetailComponent implements OnInit {

  href = '';
  smartphone: Smartphone;

  constructor(
    private router: Router,
    private smartphoneService: SmartphoneService,
    private snackBar: MatSnackBar) {
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
    this.router.navigate(['']);
  }

  delete(): void {
    this.smartphoneService.delete(this.smartphone._links.self.href)
      .subscribe(() => {
        this.snackBar.open('Apagado!!', 'X', {
          duration: 2000,
        })
          .afterDismissed()
          .subscribe(() => {
            this.router.navigate(['']);
          });
      });
  }
}
