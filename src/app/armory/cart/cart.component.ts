import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../weapon.model'
import { isObject } from 'util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    @Input() weapons:Array<Weapon>
    @Input() totalGlimmer:number
    @Input() totalShards:number    

  constructor() { }

  ngOnInit(): void {
  }

}
