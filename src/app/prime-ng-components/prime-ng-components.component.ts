import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-prime-ng-components',
  templateUrl: './prime-ng-components.component.html',
  styleUrls: ['./prime-ng-components.component.css']
})
export class PrimeNgTableComponent {
  constructor() { }

  products = [
    {id: 0, Name: "Car", Price: 700000},
    {id: 1, Name: "Bike", Price: 65000},
    {id: 2, Name: "Washing Machine", Price: 12000},
    {id: 3, Name: "Phone", Price: 20000},
    {id: 4, Name: "AC", Price: 40000},
  ]
  columns = Object.keys(this.products[0]);
  rating: any;
  files: TreeNode[] = [
    {
      key: '0',
      label: 'Documents',
      data: 'Documents Folder',
      icon: 'pi pi-fw pi-inbox',
      children: [
          {
              key: '0-0',
              label: 'Music',
              data: 'Music Folder',
              icon: 'pi pi-fw pi-cog',
              children: [
                  { key: '0-0-0', label: 'Flute music.mp3', icon: 'pi pi-fw pi-file', data: 'Media file' },
                  { key: '0-0-1', label: 'Piano piece.mp3', icon: 'pi pi-fw pi-file', data: 'Media file' }
              ]
          },
          {
              key: '0-1',
              label: 'Pictures',
              data: 'Pictures Folder',
              icon: 'pi pi-fw pi-home',
              children: [{ key: '0-1-0', label: 'Mountains.jpg', icon: 'pi pi-fw pi-file', data: 'Mountains image' }]
          }
      ]
    },
    {
      key: '1',
      label: 'Recent',
      data: 'Recent Folder',
      icon: 'pi pi-fw pi-inbox',
      children: [
        {
          key: '1-0',
          label: 'Expenses.xlsx', 
          icon: 'pi pi-fw pi-file', 
          data: 'Expenses Document' 
        },
        {
          key: '1-1', 
          label: 'Readme.txt',
          icon: 'pi pi-fw pi-file',
          data: 'Readme Document' 
        }
        ],
    },
  
  ]

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
        node.children.forEach((childNode) => {
            this.expandRecursive(childNode, isExpand);
        });
    }
  }
  expandAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, true);
    });
  }
  collapseAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, false);
    });
  }


  availableProducts = [
    {id:'1', name: 'Black Watch'},
    {id:'2', name: 'Bamboo Watch'},
  ];
  selectedProducts: any = [];
  draggedProduct: any;

  dragStart(product: any) {
    this.draggedProduct = product;
  }

  drop() {
      if (this.draggedProduct) {
          let draggedProductIndex = this.findIndex(this.draggedProduct);
          this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
          this.availableProducts = this.availableProducts.filter((val, i) => i != draggedProductIndex);
          this.draggedProduct = null;
      }
  }

  dragEnd() {
      this.draggedProduct = null;
  }

  findIndex(product: any) {
      let index = -1;
      for (let i = 0; i < this.availableProducts.length; i++) {
          if (product.id === this.availableProducts[i].id) {
              index = i;
              break;
          }
      }
      return index;
  }
}
