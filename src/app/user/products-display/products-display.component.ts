import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import {FormControl, Validators} from '@angular/forms';
import { ItemDataService } from 'src/app/services/item-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-display',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.css']
})
export class ProductsDisplayComponent implements OnInit {

  constructor(public PS:ProductsService, public itemData:ItemDataService , private route:Router) { }

  ctrl = new FormControl(null, Validators.required);

  filterTerm:string = ""

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  Products:any[] = []
  NotifyAddedToCart:Boolean = false
  Title:string = ""
  ngOnInit(): void {
    this.PS.productsData().subscribe(res=>{
      this.Products = res
    })
  }

  displayNotification(event:any){
    this.NotifyAddedToCart = event
    setTimeout(()=>{
      this.NotifyAddedToCart = false
    },800)
  }

  viewFilterType(event:any){
   this.filterTerm =  event.target.value
  }

  getItem(x:Object){
    this.itemData.getDataOfItem(x)
    this.route.navigate(["/itemData"])
  }
}
