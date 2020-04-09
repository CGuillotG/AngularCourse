import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../../models/weapon.model'

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrls: ['./weapon-details.component.scss']
})
export class WeaponDetailsComponent implements OnInit {

    @Input() weapon:Weapon

  constructor() {
  }

  ngOnInit(): void {
  }

}
