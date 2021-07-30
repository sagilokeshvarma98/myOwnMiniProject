import { Component, OnInit } from '@angular/core';
import { ItemDataService } from 'src/app/services/item-data.service';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

  constructor(private itemData:ItemDataService) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem("itemData"));
  }

}
