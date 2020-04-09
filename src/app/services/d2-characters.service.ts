import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BungieResponse } from '../models/bungie-response.model';

@Injectable({
    providedIn: 'root'
})

export class D2CharactersService {

    private xAPIKey:string = "51790635b5294971a30fc093802e9622"

    // Hardcoded, will get from character-select:
    memType:number = 3
    membershipId:string = "4611686018467657988"

    //First character
    currentCharacterId:string = ""

    constructor() { } 

    getCharacterIds():Observable<string[]> {
        let url = `https://www.bungie.net/Platform/Destiny2/${this.memType}/Profile/${this.membershipId}/?components=characters`
        return ajax.getJSON<BungieResponse>(url,{'X-API-Key': this.xAPIKey}).pipe(
            map(resp => Object.keys(resp.Response.characters.data))
        )
    }

}
