import { Component, Input } from '@angular/core';
import { cartDetails, cartItems } from '../user-data';

@Component({
  selector: 'app-added-item',
  templateUrl: './added-item.component.html',
  styleUrls: ['./added-item.component.css']
})
export class AddedItemComponent {
  @Input() title: string = "";
  @Input() id: string = "";
  @Input() price: string = "";
  @Input() count: string = "";
  @Input() totalCost: string = "";
  @Input() imgUrl: string = "";

  remove() {
    let idx = -1;
    for (let i = 0; i < cartItems.length; i++) {
      let item = cartItems[i];
      if (item.id === this.id) {
        idx = i;
        break;
      }
    }
    if (cartItems[idx].count === 1) {
      let invisiblemodalOpenButton = document.querySelector("#invisiblemodalOpenButton") as HTMLButtonElement;
      invisiblemodalOpenButton.click();
    }
    else {
      cartItems[idx].count -= 1;
      cartItems[idx].totalCost -= +this.price;
      cartDetails.totalItems -= 1;
      this.count = (+this.count - 1).toString();
      if (cartItems[idx].count === 0) cartItems.splice(idx, 1);
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
      this.count = (+this.count + 1).toString();
      cartItems[idx].totalCost += +this.price;
    }
    else {
      cartItems.push({id: this.id, title: this.title, count: 1, price: +this.price, totalCost: +this.price, imgUrl: this.imgUrl});
      this.count = (+this.count + 1).toString();
      cartItems[idx].totalCost += +this.price;
      cartDetails.totalItems += 1;
    }
  }

  delete() {
    let idx = -1;
    for (let i = 0; i < cartItems.length; i++) {
      let item = cartItems[i];
      if (item.id === this.id) {
        idx = i;
        break;
      }
    }
    cartItems[idx].count -= 1;
    cartItems[idx].totalCost -= +this.price;
    cartDetails.totalItems -= 1;
    this.count = (+this.count - 1).toString();
    cartItems.splice(idx, 1);

    let deletionCancelButton = document.querySelector("#deletionCancelButton") as HTMLButtonElement;
    deletionCancelButton.click();
  }
}
