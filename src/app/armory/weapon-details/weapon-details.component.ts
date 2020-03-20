import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../weapon.model'

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrls: ['./weapon-details.component.css']
})
export class WeaponDetailsComponent implements OnInit {

    @Input() weapon:Weapon

  constructor() {
  }

  ngOnInit(): void {
  }

}
