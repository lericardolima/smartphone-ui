import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartphone-list',
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.scss']
})
export class SmartphoneListComponent implements OnInit {

  smartphones = {
    "_embedded": {
      "smartphones": [
        {
          "code": "SMT12345",
          "model": "Smart I",
          "price": 2599.99,
          "brand": "MyPhone",
          "photo": "https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620",
          "startDate": "2020-01-01",
          "endDate": "2022-01-01",
          "color": "BLACK",
          "_links": {
            "self": {
              "href": "https://smartphone-api.herokuapp.com/smartphones/1"
            },
            "smartphone": {
              "href": "https://smartphone-api.herokuapp.com/smartphones/1"
            }
          }
        },
        {
          "code": "SMT12346",
          "model": "Smart II",
          "price": 3199.99,
          "brand": "MyPhone",
          "photo": "https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620",
          "startDate": "2021-01-01",
          "endDate": "2022-01-01",
          "color": "GOLD",
          "_links": {
            "self": {
              "href": "https://smartphone-api.herokuapp.com/smartphones/-46"
            },
            "smartphone": {
              "href": "https://smartphone-api.herokuapp.com/smartphones/-46"
            }
          }
        }
      ]
    },
    "_links": {
      "self": {
        "href": "https://smartphone-api.herokuapp.com/smartphones{?page,size,sort}",
        "templated": true
      },
      "profile": {
        "href": "https://smartphone-api.herokuapp.com/profile/smartphones"
      }
    },
    "page": {
      "size": 20,
      "totalElements": 2,
      "totalPages": 1,
      "number": 0
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
