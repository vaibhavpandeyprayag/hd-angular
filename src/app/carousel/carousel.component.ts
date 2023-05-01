import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  slidesStore = [
    {
      id: "0",
      alt: "",
      title: "Title 1",
      src: "https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    },
    {
      id: "1",
      alt: "",
      title: "Title 2",
      src: "https://media.istockphoto.com/id/1217828258/photo/grey-stripped-mixed-breed-cat-sitting-isolated-on-white.jpg?s=612x612&w=0&k=20&c=ZdsQKhn9NqMm8KQ-AlpT7D7E0SBv9pNJF-Sbs-j91R0=",
    },
    {
      id: "2",
      alt: "",
      title: "Title 3",
      src: "https://moderncat.com/wp-content/uploads/2022/12/bigstock-Cute-Abyssinian-Cat-Sitting-On-401011127-940x640.jpg",
    },
    {
      id: "3",
      alt: "",
      title: "Title 4",
      src: "https://media.istockphoto.com/id/1306857294/photo/siberian-kitten.jpg?s=612x612&w=0&k=20&c=v8JReyaa2zpZIFgCwlf7b-qxLc0eI2OvrDGw-1sLaBw=",
    },
    {
      id: "4",
      alt: "",
      title: "Title 5",
      src: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
    },
    {
      id: "5",
      alt: "",
      title: "Title 6",
      src: "https://hips.hearstapps.com/hmg-prod/images/stop-cats-pooping-in-garden-1675166362.jpg?crop=0.668xw:1.00xh;0.0898xw,0&resize=1200:*",
    },
    {
      id: "6",
      alt: "",
      title: "Title 7",
      src: "https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*",
    },
    {
      id: "7",
      alt: "",
      title: "Title 8",
      src: "https://moderncat.com/wp-content/uploads/2022/12/bigstock-Cute-Abyssinian-Cat-Sitting-On-401011127-940x640.jpg",
    },
  ]
}
