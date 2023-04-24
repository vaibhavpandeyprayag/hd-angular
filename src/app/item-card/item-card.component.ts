import { Component, Input } from '@angular/core';
import { cartItems, cartDetails } from '../user-data';
@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() title: string = "";
  @Input() imgUrl: string = "";
  @Input() id: string = "";
  @Input() price: string = "";

  remove() {
    let idx = -1;
    for (let i = 0; i < cartItems.length; i++) {
      let item = cartItems[i];
      if (item.id === this.id) {
        idx = i;
        break;
      }
    }
    if (idx !== -1) {
      cartItems[idx].count -= 1;
      cartDetails.totalCost -= cartItems[idx].price;
      if (cartItems[idx].count === 0) cartItems.splice(idx, 1);
      cartDetails.totalItems -= 1;
    }
  }

  add() {
    let idx = -1;
    for (let i = 0; i < cartItems.length; i++) {
      let item = cartItems[i];
      if (item.id === this.id) {
        idx = i;
        break;
      }
    }

    if (idx !== -1) {
      cartItems[idx].count += 1; 
      cartDetails.totalItems += 1;
      cartDetails.totalCost += cartItems[idx].price;
    }
    else {
      cartItems.push({id: this.id, title: this.title, count: 1, price: +this.price});
      cartDetails.totalItems += 1;
      cartDetails.totalCost += +this.price;
    }
  }
}
