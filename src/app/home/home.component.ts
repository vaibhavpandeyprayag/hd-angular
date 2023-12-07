import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { NetworkStatusService } from '../network-status.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  networkStatus: boolean = true;
  constructor(private db: DbService, private network: NetworkStatusService) {}
  ngOnInit(): void {
    this.networkStatus = navigator.onLine;
    this.syncData();
    this.network.statusChange.subscribe((status: boolean) => {
      this.networkStatus = status;
      console.log(this.networkStatus);
      if (this.networkStatus) {
        setTimeout(() => {this.syncData();}, 200);        
      }
    });

  }

  addRecord() {
    this.db.addData({name: "Vaibhav", age: 21}).then(res => console.log("Objected added >", res));
  }
  getAllRecords() {
    this.db.getAllData().then(res => console.log(res));
  }

  syncData() {
    this.getAllRecords();
    alert("Data synched");
  }

  
}
