import { Component, OnInit, OnDestroy } from '@angular/core';
import { D2CharactersService } from '../services/d2-characters.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
    
    private d2CharacterIdsSubscription: Subscription
    
    characterIds:string[] = []

    constructor(private d2CharactersService: D2CharactersService) { }

    ngOnInit(): void {
        this.d2CharacterIdsSubscription = this.d2CharactersService.getCharacterIds().subscribe(
            response => {
                this.characterIds = response
                console.log(this.characterIds)
            },
            error => console.error('Error caught:',error))
    }
    ngOnDestroy(): void {
        this.d2CharacterIdsSubscription.unsubscribe()
    }

}
