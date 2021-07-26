import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-notify',
  templateUrl: './cart-notify.component.html',
  styleUrls: ['./cart-notify.component.css']
})
export class CartNotifyComponent implements OnInit {

  constructor() { }

  NotifyAddedToCart:Boolean = false

  ngOnInit(): void {
   
  }

  addToCart(){
    this.NotifyAddedToCart = true
    setTimeout(()=>{
      this.NotifyAddedToCart = false
    },800)
  }

}
