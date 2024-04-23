import { Component, OnInit  } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listproducts: Product [] = [
    { id: 1 , name:'pepsi', description:'bebida gasificada', price: 6 , stock: 10 },
    { id: 1 , name:'manzanita', description:'bebida gasificada', price: 6 , stock: 10 },
  ]
  
  constructor () {}
  
  ngOnInit(): void {
    
  }
}
