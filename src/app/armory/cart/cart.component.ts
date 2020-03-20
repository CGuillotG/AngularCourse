import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../weapon.model'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    @Input() weapons:Array<Weapon>

  constructor() { }

  ngOnInit(): void {
  }

}
