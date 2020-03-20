import { Component, OnInit } from '@angular/core';
import { Weapon } from './weapon.model'

@Component({
  selector: 'app-armory',
  templateUrl: './armory.component.html',
  styleUrls: ['./armory.component.css']
})
export class ArmoryComponent implements OnInit {
    weapons:Array<Weapon> = [
        new Weapon('Patron of Lost Causes', 'Scout Rifle', 'Kinetic','https://bungie.net/common/destiny2_content/icons/9d0a1ad5374c23edd4454a0f41c38e89.jpg', 'https://bungie.net/common/destiny2_content/screenshots/2723241847.jpg',1500,10),
        new Weapon("Martyr's Retribution", 'Grenade Launcher', 'Energy','https://bungie.net/common/destiny2_content/icons/f9147f060f536f2c794bc3acc5100b55.jpg','https://bungie.net/common/destiny2_content/screenshots/3850168899.jpg',1500,10),
        new Weapon("The Colony", 'Grenade Launcher', 'Heavy','https://bungie.net/common/destiny2_content/icons/dadeb1f4484ffdaec2420240700dc637.jpg','https://bungie.net/common/destiny2_content/screenshots/3899270607.jpg',2000,50)
    ]
    selectedWeapon:Weapon
    weaponCart:Array<Weapon> = []

  constructor() { }

  ngOnInit(): void {
  }

  addToCart = (weapon:Weapon) => {
      this.weaponCart.push(weapon)
      console.log(this.weaponCart)
  }

}
