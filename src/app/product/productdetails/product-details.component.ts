import { ProductServiceService } from './../../services/product-service.service';
import { Product } from './../product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private _activatedRoute: ActivatedRoute,private _prdService:ProductServiceService,private _router : Router) {}

  public productId :any;
  public ProductDetails:any;
  ngOnInit() {
     let cId =   this._activatedRoute.snapshot.paramMap.get('id');
     this.productId = parseInt(cId ? cId : '');
     this.ProductDetails = this._prdService.GetProductDetailsbyId(this.productId);

  }

  GotoProductList(){
      this._router.navigate(['/Products']);
  }
}
