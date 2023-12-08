import { Injectable } from '@angular/core';
import Dexie from "dexie";


interface InboundLogInterface {
  tableName: string
}

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie {  
  myTable: Dexie.Table<any, number>;
  myTableSyncStore: Dexie.Table<any, number>;
  public inboundLog: Dexie.Table<InboundLogInterface, number>;
  constructor() {     
    super('dexieDB');

    this.version(1).stores({
      inboundLog: '++id, tableName',
      myTable: '++key, id, name, age',
      myTableSyncStore: '++key, row, operation'      
    });
    

    this.myTable = this.table('myTable');
    this.inboundLog = this.table('inboundLog');
    this.myTableSyncStore = this.table('myTableSyncStore')
  }
  
  
  loadData(data: any): Promise<number> {
    return this.myTable.add({row: data});
  }

  insertSyncData(data: any): Promise<number> {
    return this.myTableSyncStore.add({ row: data, operation: "insertion"})
  }

  async updateSyncData(id: number, data: any): Promise<number> {
    return this.myTableSyncStore.add({row: data, operation: "updation"});
  }

  async deleteSyncData(id: number) {    
    return this.myTableSyncStore.add({row: {id: id}, operation: "deletion"})
  }

  addInboundLog(data: InboundLogInterface): Promise<number> {
    return this.inboundLog.add(data);
  }

  getAllData(): Promise<any[]> {
    return this.myTable.toArray();
  }
  getAllSyncData(): Promise<any[]> {
    return this.myTableSyncStore.toArray();
  }

  clearStores() {
    return Promise.all([this.inboundLog.clear(), this.myTable.clear()]);
  }

  deleteDB() {
    return Dexie.delete("dexieDB");
  }
}
