import { Component } from '@angular/core';
import { cartDetails, cartItems } from '../user-data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: any;
  totalCost: number;

  constructor() {
    this.items = cartItems;
    this.totalCost = cartDetails.totalCost;    
  }
}