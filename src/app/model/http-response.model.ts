import { Smartphone } from './smartphone.model';

export interface HttpResponse {
    _embedded: {
      smartphones: Smartphone[];
    };
  }