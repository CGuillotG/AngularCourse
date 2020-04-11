import { Component, OnInit, Input } from '@angular/core';
import { D2Character } from 'src/app/models/d2-character.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

    @Input() character:D2Character
    @Input() secsSinceRefresh:number = 0

  constructor() { }

  ngOnInit(): void {
  }

  getRGBString() {
    return 'rgb('+this.character.emblemColor.red+','+this.character.emblemColor.green+','+this.character.emblemColor.blue+')'
  }

}
