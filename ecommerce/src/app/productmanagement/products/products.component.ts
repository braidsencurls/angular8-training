import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductmanagementModule} from '../productmanagement.module';
import {Product} from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public listView: boolean;
  public productForm: FormGroup;
  constructor() {
    this.listView = true;
  }

  ngOnInit() {
  }
  createForm() {
    this.productForm  = new FormGroup({
      name: new FormControl('', [Validators.minLength(3), Validators.maxLength(50)]),
      description: new FormControl('', [Validators.minLength(3), Validators.maxLength(50)]),
      quantity: new FormControl('', [Validators.min(3), Validators.max(1000)]),
      price: new FormControl('', [Validators.min(3), Validators.max(1000)]),
      source: new FormControl('', [Validators.minLength(3), Validators.maxLength(50)]),
      photo: new FormControl('', [Validators.minLength(3), Validators.max(50)]),
    });
    this.listView = false;
  }
  doSave(product: Product) {

  }

}
