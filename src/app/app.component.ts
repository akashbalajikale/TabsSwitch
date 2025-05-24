import { Component, OnInit } from '@angular/core';
import { Iproduct } from './shared/models/products';
import { MobileService } from './shared/services/mobile.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
[x: string]: any;
 
    title = 'tabswitch';
    productarray : Array<Iproduct> =[]  

    constructor( private _mobileService : MobileService){}

    ngOnInit(): void {
     this.productarray = this._mobileService.fetchAllMObile()
    }

  liked = false;
   

  toggleLike() {
    this.liked = !this.liked;
  }

  tab: 'description' | 'reviews' | 'specs' = 'description';
  
  setTab(tab: 'description' | 'reviews' | 'specs') {
    this.tab = tab;
  }

  addToCart() {
    alert("Added to cart!");
  }

  removeFromCart() {
    alert("Removed from cart!");
  }

 
productstatus : string = "no product added yet"
cartcount :number = 0;
 
productCount = 0;

addProduct() {
  this.productCount++;
}

removeProduct() {
  if (this.productCount > 0) {
    this.productCount--;
  }
}
}
