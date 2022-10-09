import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor() { }

  userSingUp(){
    console.warn("service called")
  }
}
