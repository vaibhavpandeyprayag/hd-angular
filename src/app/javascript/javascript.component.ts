import { Component } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {
  letX = {xBy1: 0, xBy2: 0};
  constX = {xLet: 0, xConst: 0};
  powerOf5 = 1;
  increaseLetX() {
    {
      let x = this.letX.xBy1;
      x++;
      this.letX.xBy1 = x;
    }
    {
      let x = this.letX.xBy2;
      x += 2;
      this.letX.xBy2 = x;
    }
  }

  increaseConstX() {
    {
      let x = this.constX.xLet;
      x++;
      this.constX.xLet = x;
    }
    {
      const x = this.constX.xConst;
      // x++ => gives error
    }
  }

  calcNextPower = () => this.powerOf5 = 5 * this.powerOf5;
  

  originalObject = {name: "Ram", age: "52", height: "1.6m"};
  spreadObject = {name: "", age: "", height: ""};

  spreadProperties = () => this.spreadObject = {...this.originalObject};
  resetProperties = () => this.spreadObject = {name: "", age: "", height: ""};

  digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  digitsString = "";
  digitsToString() {
    for (let d of this.digits) this.digitsString += d;
    return this.digitsString;
  }

  map = new Map([["fruit", "apple"], ["shape", "cube"], ["vegetable", "tomato"], ["company", "humanitics"], ["place", "noida"]]);
  valueSelected = this.map.get("fruit");
  showValue(event: Event) {
    let target = event.target as HTMLSelectElement;
    this.valueSelected = this.map.get(target.value);
  }

  quote = "";
  awaitTimeoutPromise = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));
  showQuote() {
    this.awaitTimeoutPromise(3000).then(() => this.quote = "Some things are better left unsaid.");
  }

  endsStatus = "";
  checkBothEnds(val: string) {
    if (val.startsWith("a") && val.endsWith("t")) this.endsStatus = "Input starts with 'a' and ends with 't'";
    else if (val.startsWith("a")) this.endsStatus = "Input starts with 'a' but does not end with 't'";
    else if (val.endsWith("t")) this.endsStatus = "Input does not start with 'a' but ends with 't'";
    else this.endsStatus = "Input neither starts with 'a' nor ends with 't'";
  }

  searchStatus = "";
  search(val: string) {
    function myFunction(value: number, index: number, array: Array<number>) {
      return value === +val;
    }
    const numbers = [4, 9, 16, 25, 29];
    let found = numbers.find(myFunction);
    let ind = undefined;
    if (found != undefined) {
      ind = numbers.findIndex(myFunction);
      this.searchStatus = "Number found at index " + ind;
    }
    else this.searchStatus = "Number not found."
    
    
    
    
  }
}
