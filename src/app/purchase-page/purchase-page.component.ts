import { Component } from '@angular/core';
import { cartDetails } from '../user-data';

@Component({
  selector: 'app-purchase-page',
  templateUrl: './purchase-page.component.html',
  styleUrls: ['./purchase-page.component.css']
})
export class PurchasePageComponent {
  details: any;
  constructor() {
    this.details = cartDetails;
  }
}
