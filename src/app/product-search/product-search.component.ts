import { Component } from '@angular/core';

interface topCategory {
  id: number,
  name: string,
  imgUrl: string,
}

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  items: string[] = [
    // Televisions
    "Samsung QLED TV",
    "LG OLED TV",
    "Sony Bravia",
    "TCL Roku TV",
    "Vizio Smart TV",
    // Laptops
    "Apple MacBook Pro",
    "Dell XPS 13",
    "HP Spectre x360",
    "Lenovo ThinkPad X1 Carbon",
    "Asus ROG Zephyrus",
    // Smartphones
    "iPhone 13",
    "Samsung Galaxy S21",
    "Google Pixel 6",
    "Xiaomi Mi 11",
    "OnePlus 9",
    // Tablets
    "iPad Pro",
    "Samsung Galaxy Tab S7",
    "Microsoft Surface Pro 7",
    "Amazon Fire HD 10",
    "Lenovo Tab P11 Pro",
    // Headphones
    "Sony WH-1000XM4",
    "Bose QuietComfort 35 II",
    "Apple AirPods Pro",
    "Jabra Elite 85t",
    "Sennheiser HD 660 S",
    // Cameras
    "Canon EOS R5",
    "Nikon Z7 II",
    "Sony Alpha a7 III",
    "Fujifilm X-T4",
    "Panasonic Lumix GH5",
    // Gaming Consoles
    "PlayStation 5",
    "Xbox Series X",
    "Nintendo Switch",
    "PC Gaming",
    "Oculus Quest 2",
    // Smartwatches
    "Apple Watch Series 7",
    "Samsung Galaxy Watch 4",
    "Fitbit Versa 3",
    "Garmin Forerunner 945",
    "Fossil Gen 5",
    // Apple
    "iPhone 13",
    "iPhone 13 Pro",
    "iPhone 13 Mini",
    "iPhone 13 Pro Max",
    "iPhone 12",
    "iPhone 12 Pro",
    "iPhone 12 Mini",
    "iPhone 12 Pro Max",
    "iPhone SE",
    // Samsung
    "Galaxy S21",
    "Galaxy S21+",
    "Galaxy S21 Ultra",
    "Galaxy S20",
    "Galaxy S20+",
    "Galaxy S20 Ultra",
    "Galaxy Note 20",
    "Galaxy Note 20 Ultra",
    "Galaxy A52",
    // Google
    "Pixel 6",
    "Pixel 6 Pro",
    "Pixel 5",
    "Pixel 4a",
    "Pixel 4a 5G",
    // Xiaomi
    "Mi 11",
    "Mi 11 Pro",
    "Mi 11 Ultra",
    "Redmi Note 10",
    "Redmi Note 10 Pro",
    "Redmi 9",
    // OnePlus
    "OnePlus 9",
    "OnePlus 9 Pro",
    "OnePlus 9R",
    "OnePlus 8T",
    "OnePlus Nord",
    // Huawei
    "Huawei P40",
    "Huawei P40 Pro",
    "Huawei Mate 40",
    "Huawei Mate 40 Pro",
    // Oppo
    "Oppo Find X3 Pro",
    "Oppo Reno5",
    "Oppo Reno4",
    // Vivo
    "Vivo X60 Pro",
    "Vivo X50 Pro",
    "Vivo Y20",
    // Motorola
    "Motorola Edge",
    "Motorola Edge+",
    "Motorola G Power",
    // LG
    "LG Velvet",
    "LG Wing",
    "LG Q70"
  ]; 
   
  topCategories: topCategory[] = [
    {
      id: 0,
      name: "Smartphones",
      imgUrl: "https://www.91-cdn.com/hub/wp-content/uploads/2023/05/realme-11-pro-flipkart-availability.jpg?tr=w-780,q-100,pr-true" 
    },
    {
      id: 1,
      name: "TV",
      imgUrl: "https://www.lg.com/in/images/tvs/md07511862/gallery/32LM563BPTC-D-02.jpg" 
    },
    {
      id: 2,
      name: "Stationery",
      imgUrl: "https://e7.pngegg.com/pngimages/332/997/png-clipart-art-material-lot-ant-stationers-paper-office-supplies-stationery-stationary-pencil-company-thumbnail.png" 
    },
    {
      id: 3,
      name: "Summer Clothes",
      imgUrl: "https://p7.hiclipart.com/preview/342/140/1013/long-sleeved-t-shirt-children-s-clothing-top-cool-summer-boy-thumbnail.jpg" 
    },

  ]; 
  suggestedItems: string[] = [];
  searchHistory: string[] = [];
  searchInput: string = "";
  showSuggestions: boolean = false;
  noSuggestions: boolean = false;
  noHistoryFound: boolean = true;

  filterItems(e: Event) {    
    let inputElement = e.target as HTMLInputElement;
    this.searchInput = inputElement.value;
    
    if (this.searchInput.length < 2) {
      this.showSuggestions = false;
      return;
    }

    this.showSuggestions = true;
    this.suggestedItems = this.items.filter(item => item.toLowerCase().indexOf(this.searchInput) !== -1);
    this.noSuggestions = (this.suggestedItems.length === 0) ? true : false;
  }
  openItem(e: Event) {
    let buttonElement = e.target as HTMLButtonElement;
    let item = buttonElement.innerHTML;
    console.log(item);
    if (this.searchHistory.indexOf(item) === -1) {
      this.searchHistory.unshift(item);
      this.noHistoryFound = false;
    }
  }
}
