import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  dimensions = {
    width: "100",
    height: "100",
  }

  cart = {
    totalItems: "0",
  }

  setWidth(event: Event) {
    const target = event.target as HTMLButtonElement;
    this.dimensions.width = target.value;
  }
  setHeight(event: Event) {
    const target = event.target as HTMLButtonElement;
    this.dimensions.height = target.value;
  }
  reset() {
    this.dimensions.width = "100";
    this.dimensions.height = "100";
  }
}
