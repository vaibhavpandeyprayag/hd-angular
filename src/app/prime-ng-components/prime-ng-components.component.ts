import { Component } from '@angular/core';
import { MenuItem, TreeNode } from 'primeng/api';

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
    {id:'3', name: 'Silver Watch'},
    {id:'4', name: 'Rubber Watch'},
    {id:'5', name: 'Digital Watch'},
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

  barData: any;
  barOptions: any;
  pieData: any;
  pieOptions: any;
  lineData: any;
  lineOptions: any;

  items: MenuItem[] = [
    {
        label: 'table',
        icon: 'https://cdn-icons-png.flaticon.com/512/2991/2991114.png'
    },
    {
        label: 'progressbar',
        icon: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/progress_bar.png'
    },
    {
        label: 'checkbox',
        icon: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/checkbox.png'
    },
    {
        label: 'rating',
        icon: 'https://cdn-icons-png.flaticon.com/512/3915/3915794.png'
    },
    {
      label: 'tree',
      icon: 'https://cdn1.iconfinder.com/data/icons/aami-flat-folders/64/folder-39-512.png'
    },
    {
      label: 'charts',
      icon: 'https://cdn-icons-png.flaticon.com/512/404/404621.png'
    },
  ];
  position: string = 'right';
  positionOptions = [
      {
          label: 'Bottom',
          value: 'bottom'
      },
      {
          label: 'Top',
          value: 'top'
      },
      {
          label: 'Left',
          value: 'left'
      },
      {
          label: 'Right',
          value: 'right'
      }
  ];

  ngOnInit() {
    const barDocumentStyle = getComputedStyle(document.documentElement);
    const barTextColor = barDocumentStyle.getPropertyValue('--text-color');
    const barTextColorSecondary = barDocumentStyle.getPropertyValue('--text-color-secondary');
    const barSurfaceBorder = barDocumentStyle.getPropertyValue('--surface-border');

    this.barData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Sales',
                data: [540, 325, 702, 620],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };

    this.barOptions = {
        plugins: {
            legend: {
                labels: {
                    color: barTextColor
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: barTextColorSecondary
                },
                grid: {
                    color: barSurfaceBorder,
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: barTextColorSecondary
                },
                grid: {
                    color: barSurfaceBorder,
                    drawBorder: false
                }
            }
        }
    };


    const pieDocumentStyle = getComputedStyle(document.documentElement);
    const pieTextColor = pieDocumentStyle.getPropertyValue('--text-color');

    this.pieData = {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [pieDocumentStyle.getPropertyValue('--blue-500'), pieDocumentStyle.getPropertyValue('--yellow-500'), pieDocumentStyle.getPropertyValue('--green-500')],
                hoverBackgroundColor: [pieDocumentStyle.getPropertyValue('--blue-400'), pieDocumentStyle.getPropertyValue('--yellow-400'), pieDocumentStyle.getPropertyValue('--green-400')]
            }
        ]
    };

    this.pieOptions = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: pieTextColor
                }
            }
        }
    };


  const lineDocumentStyle = getComputedStyle(document.documentElement);
  const lineTextColor = lineDocumentStyle.getPropertyValue('--text-color');
  const lineTextColorSecondary = lineDocumentStyle.getPropertyValue('--text-color-secondary');
  const lineSurfaceBorder = lineDocumentStyle.getPropertyValue('--surface-border');

  this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: lineDocumentStyle.getPropertyValue('--blue-500'),
              tension: 0.4
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: lineDocumentStyle.getPropertyValue('--pink-500'),
              tension: 0.4
          }
      ]
  };

  this.lineOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
          legend: {
              labels: {
                  color: lineTextColor
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: lineTextColorSecondary
              },
              grid: {
                  color: lineSurfaceBorder,
                  drawBorder: false
              }
          },
          y: {
              ticks: {
                  color: lineTextColorSecondary
              },
              grid: {
                  color: lineSurfaceBorder,
                  drawBorder: false
              }
          }
      }
    };    
  }

  navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }  
}
