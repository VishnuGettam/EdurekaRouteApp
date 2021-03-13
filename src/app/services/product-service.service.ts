import { Product } from './../product/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  public ProductList: Product[] = [];

  constructor() {
    this.ProductList = [
      {
        Id: 1,
        Name: 'Nokia 5.4',
        Description:
          'Nokia 5.4. The 48MP Quad camera gives you total creative control',
        Price: 25000,
        ImgUrl: 'assets/Nokia 5.4.png',
      },
      {
        Id: 2,
        Name: 'Samsung Note 8',
        Description:
          '	Galaxy Note8 6.3" Quad HD+ Super AMOLED (2960 x 1440)521 ppi',
        Price: 560000,
        ImgUrl: 'assets/Samsung Note 8.png',
      },
      {
        Id: 3,
        Name: 'Motorola razr',
        Description:
          'Revolutionary 6.2"(15.74 cms) Foldable Display Dual displays. Singular experience with Quick View Display Flippable and Pocket-Ready Design with Zero-gap hinger Brilliant Dual Use Camera with Night Vision',
        Price: 27000,
        ImgUrl: 'assets/MotoRazor.png',
      },
      {
        Id: 4,
        Name: 'Redmi Note 9',
        Description:
          'Redmi Note 9 is equiped with a high-performance octa-core processor with a maximum frequency of 2.0GHz',
        Price: 10500,
        ImgUrl: 'assets/xiaomi-redmi-note-9-4.jpg',
      },
      {
        Id: 5,
        Name: 'Nokia C3',
        Description:
          'Nokia C3. The 5.99”(15.2 cm) HD+ screen is big on brilliance, so every detail of work and play is crystal-clear',
        Price: 63000,
        ImgUrl: 'assets/Nokia C3.png',
      },
      {
        Id: 6,
        Name: 'Galaxy S21 Ultra 5G',
        Description:
          'Galaxy S21 Ultra 5G. Designed with a unique contour-cut camera to create a revolution in photography — letting you capture cinematic 8K video and snap epic stills, all in one go',
        Price: 14500,
        ImgUrl: 'assets/Nokia C3.png',
      },
    ];
  }

  GetProductsList() {
    return this.ProductList;
  }

  GetProductDetailsbyId(pId: number) {
    let productDetails;
    this.ProductList.find((product) => {
      if (product.Id == pId) {
        productDetails = product;
      }
    });
    return productDetails;
  }
}
