import { Component, OnInit, OnDestroy } from '@angular/core';
import { D2CharactersService } from '../services/d2-characters.service';
import { Subscription } from 'rxjs';
import { D2Character } from '../models/d2-character.model';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {

    private d2CharactersDataSubscription: Subscription
    // private d2CharacterSubscriptions: Subscription[] = []

    characterData: D2Character[] = []    
    currentCharacter:number = 2

    constructor(private D2CharactersService: D2CharactersService) { }

    ngOnInit(): void {
        this.d2CharactersDataSubscription = this.D2CharactersService.getCharactersData().subscribe(
            response => {
                this.characterData = response
                console.log(this.characterData)
            },
            error => console.error('Error caught:', error)
        )

    }
    ngOnDestroy(): void {
        this.d2CharactersDataSubscription.unsubscribe()
        // this.d2CharacterSubscriptions.forEach(subscription => subscription.unsubscribe)
    }

}
