import { Component, OnInit } from '@angular/core';
import { SellerService } from '../serives/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService ) { }

  ngOnInit(): void {
  }
  singUp(item:object){
    
    console.log(item)
    this.seller.userSingUp(item).subscribe((result:any)=>{
      console.warn(result)
    })
  }

}
