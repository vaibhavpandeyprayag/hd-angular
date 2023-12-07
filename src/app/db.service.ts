import { Injectable } from '@angular/core';
import Dexie from "dexie";

interface DataInterface {
  id?: number,
  name: string,
  age: number
}

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie {
  dbStore: Dexie.Table<DataInterface, number>;

  constructor() {     
    super('dexieDB');

    this.version(1).stores({
      myDatabase: '++id, name, age',      
    });

    this.dbStore = this.table('myDatabase');
  }
  
  
  addData(data: DataInterface): Promise<number> {
    return this.dbStore.add(data);
  }

  getAllData(): Promise<DataInterface[]> {
    return this.dbStore.toArray();
  }
}
