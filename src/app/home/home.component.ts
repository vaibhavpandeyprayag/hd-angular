import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { NetworkStatusService } from '../network-status.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  initialDataFromDB: any[] = [
    {id: 1, name: "Gaurav", age: 18},
    {id: 2, name: "Amit", age: 19},
    {id: 3, name: "Prakhar", age: 20},
    {id: 4, name: "Kuldeep", age: 26},
  ]
  pk: number = -1;
  recordId: number| undefined = undefined
  recordName: string = "";
  recordAge: number = 0;
  networkStatus: boolean = true;
  constructor(private db: DbService, private network: NetworkStatusService) {}
  ngOnInit(): void {
    this.db.clearStores().then(res => console.log("Stores cleared initially.", res));
    this.initialDataFromDB.forEach(obj => this.db.loadData(obj).then(res => console.log("Loaded record >", res)));
    this.db.addInboundLog({tableName: "initialDataFromDB"}).then(res => console.log("initialDataFromDB saved >", res));
    this.pk = this.initialDataFromDB[this.initialDataFromDB.length - 1].id;

    // this.networkStatus = navigator.onLine;
    // this.network.statusChange.subscribe((status: boolean) => {
    //   this.networkStatus = status;
    //   console.log(this.networkStatus);
    //   if (this.networkStatus) {
    //     setTimeout(() => {this.syncData();}, 200);        
    //   }
    // });    
  }

  addRecord() {
    this.db.insertSyncData({id: ++this.pk, name: this.recordName, age: this.recordAge}).then(res => console.log("Inserted record. Key =", res));
  }
  updateRecord() {
    this.db.updateSyncData(this.recordId as number, {id: this.recordId, name: this.recordName, age: this.recordAge}).then(res => console.log("Updated record. Key =", res));
  }
  deleteRecord() {
    this.db.deleteSyncData(this.recordId as number).then(res => console.log("Deleted record. Key =", res));
  }
  getAllRecords() {
    this.db.getAllData().then(res => console.log(res));
  }
  getAllSyncRecords() {
    this.db.getAllSyncData().then(res => console.log(res));
  }
  async syncData() {
    let syncData = await this.db.getAllSyncData();
    
    syncData.forEach((data) => {
      if (data.operation == "insertion") {
        this.initialDataFromDB.push(data.row);
        console.log("Record insertion synched");
      }
      else if (data.operation == "updation") {
        let updatedItemIndex: number = -1;
        this.initialDataFromDB.forEach((data2, ind) => {
          if (data2.id == data.row.id) {updatedItemIndex = ind; return};
        });
        this.initialDataFromDB[updatedItemIndex] = data.row;
        console.log("Record updation synched");
      }
      else if (data.operation == "deletion") {
        this.initialDataFromDB = this.initialDataFromDB.filter(data2 => data2.id != data.row.id);
        console.log("Record deletion synched");
      }
    })    
    console.log(this.initialDataFromDB);
  }
  

  
}
