import { ProductServiceService } from './../services/product-service.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';


@Component({
  selector: 'app-Product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productsList: Product[] ;
  constructor(private _router:Router,private _prdService:ProductServiceService ) {

    this.productsList = this._prdService.GetProductsList();
  }

  NavigatetoProduct(productId:number){
          console.log(productId);
          this._router.navigate(['/Products',productId])
  }
}
