import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {

  constructor() { }

  @Input() title:any
  @Output() displayNotification = new EventEmitter()

  ngOnInit(): void {
  }

  AddToCart(){
    console.log(this.title);
    this.displayNotification.emit('true')
  }

}
