import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../../models/weapon.model'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    @Input() weapons:Array<Weapon>
    @Input() totalGlimmer:number
    @Input() totalShards:number    

  constructor() { }

  ngOnInit(): void {
  }

}
