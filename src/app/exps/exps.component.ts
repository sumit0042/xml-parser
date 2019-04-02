import { Component, OnInit } from '@angular/core';

import * as WooCommerceAPI from 'woocommerce-api';


@Component({
  selector: 'app-exps',
  templateUrl: './exps.component.html',
  styleUrls: ['./exps.component.css']
})
export class ExpsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onButtonClick(){
    console.log("button clicked")
    var WooCommerce = new WooCommerceAPI({
      url: 'http://vicinitycharter.com',
      consumerKey: 'ck_b189fbcd8e55b04ae96440f4375b1f84c1b80e3d',
      consumerSecret: 'cs_9ac92b575fedc3e5942b25f6d20d4cd88a105d92',
      wpAPI: true,
      version: 'wc/v1'
    });
    var products = WooCommerce.get('products');
    console.log("printing products" , products);
  }
}
