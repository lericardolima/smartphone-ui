import { Color } from './enums/color.enum';

export interface Smartphone {
    code: string;
    model: string,
    price: number,
    brand: string,
    photo: string,
    startDate: Date,
    endDate: Date,
    color: Color,
    _links: {self: {href: string}};
  }
  