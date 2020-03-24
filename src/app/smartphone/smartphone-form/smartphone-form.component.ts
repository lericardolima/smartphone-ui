import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Color } from '../color.enum';
import { SmartphoneService } from '../smartphone.service';
import { NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-smartphone-form',
  templateUrl: './smartphone-form.component.html',
  styleUrls: ['./smartphone-form.component.scss']
})
export class SmartphoneFormComponent implements OnInit {

  minStartDate: Date = new Date('2018-12-31');
  minEndDate: Date;
  photoUrl = '';

  smartphoneForm = this.formBuilder.group({
    code: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    model: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
    brand: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
    photo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
    price: [0, [Validators.required, Validators.min(0)]],
    color: [Color.BLACK, [Validators.required]],
    startDate: [new Date(), [Validators.required]],
    endDate: ['', [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private smartphoneService: SmartphoneService,
    private router: Router,
    private location: Location,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.syncSaleDates();
  }

  syncSaleDates(): void {
    const startDateControl = this.smartphoneForm.get('startDate');
    const endDateControl = this.smartphoneForm.get('endDate');
    this.minEndDate = this.addDay(startDateControl.value);
    if (startDateControl.value >= endDateControl.value) {
      endDateControl.setValue(this.minEndDate);
    }
  }

  addDay(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  }

  updatePhotoUrl(): void {
    this.photoUrl = this.smartphoneForm.get('photo').value;
  }

  create(): void {
    this.smartphoneService.create(this.smartphoneForm.value)
      .subscribe(smartphone => {
        let navigationExtras: NavigationExtras = {
          state: {
            href: smartphone._links.self.href
          },
        };
        this.snackBar.open('Salvo!!', 'X', {
          duration: 2000,
        })
          .afterDismissed()
          .subscribe(() => {
            this.router.navigate(['/details'], navigationExtras)
          });
      },
        (error) => {
          console.log(error)
          this.snackBar.open(`Ocorreu um erro: ${error.error.message}`, 'X', {
            duration: 2000,
          });
        })
  }

  cancel(): void {
    this.location.back();
  }
}
