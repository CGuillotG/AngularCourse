import { Component, OnInit, OnDestroy } from '@angular/core';
import { D2CharactersService } from '../services/d2-characters.service';
import { Subscription, interval } from 'rxjs';
import { D2Character } from '../models/d2-character.model';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {

    private d2CharactersDataSubscription: Subscription
    // private d2CharacterSubscriptions: Subscription[] = []
    private timerSubscription: Subscription
    characterData: D2Character[] = []
    currentCharacter: number = 0
    showAll: boolean = false
    secsSinceRefresh: number = 0

    constructor(private D2CharactersService: D2CharactersService) {
        this.d2CharactersDataSubscription = this.D2CharactersService.getCharactersData().subscribe(
            response => {
                this.characterData = response
                console.log(this.characterData)
            },
            error => console.error('Error caught:', error)
            )
    }

    ngOnInit(): void {        
        this.timerSubscription = interval(1000).subscribe(num => this.refreshCounter(num));
    }

    ngOnDestroy(): void {
        this.d2CharactersDataSubscription.unsubscribe()
        this.timerSubscription.unsubscribe()
        // this.d2CharacterSubscriptions.forEach(subscription => subscription.unsubscribe)
    }

    toggleShowAll = () => {
        this.showAll = !this.showAll
    }

    refreshCounter = (num:number) => {
        this.secsSinceRefresh++
        if(this.secsSinceRefresh%5 === 0) {
            this.switchCharacter()
        } 
        if(this.secsSinceRefresh%30 === 0 ) {
            this.updateCharacterData()
        }
    }

    updateCharacterData = () => {
        this.d2CharactersDataSubscription = this.D2CharactersService.getCharactersData().subscribe(
            response => {
                this.characterData = response
                console.log(this.characterData)                
                this.secsSinceRefresh = 0
            },
            error => console.error('Error caught:', error)
        )
    }

    switchCharacter = () => {
        let maxNum:number = this.characterData.length
        if(this.currentCharacter + 1 === maxNum) {
            this.currentCharacter = 0
        } else {
            this.currentCharacter++
        }

    }
}
