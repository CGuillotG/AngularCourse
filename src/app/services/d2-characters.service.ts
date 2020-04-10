import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BungieResponse } from '../models/bungie-response.model';
import { D2Character } from '../models/d2-character.model';

@Injectable({
    providedIn: 'root'
})

export class D2CharactersService {

    private xAPIKey:string = "51790635b5294971a30fc093802e9622"
    memType:number = 3 //Steam
    membershipId:string = "4611686018467657988"
    d2HashMap = new Map()


    constructor() {
        this.d2HashMap.set(2803282938,'Awoken')
        this.d2HashMap.set(3887404748,'Human')
        this.d2HashMap.set(898834093,'Exo')
        this.d2HashMap.set(2204441813,'Female')
        this.d2HashMap.set(3111576190,'Male')
        this.d2HashMap.set(2271682572,'Warlock')
        this.d2HashMap.set(3655393761,'Titan')
        this.d2HashMap.set(671679327,'Hunter')
    } 

    getCharacterIds():Observable<string[]> {
        let url = `https://www.bungie.net/Platform/Destiny2/${this.memType}/Profile/${this.membershipId}/?components=characters`
        return ajax.getJSON<BungieResponse>(url,{'X-API-Key': this.xAPIKey}).pipe(
            map(resp => Object.keys(resp.Response.characters.data))
        )
    }

    getCharacterFromId(characterID:string):Observable<D2Character> {
        let url = `https://www.bungie.net/Platform/Destiny2/${this.memType}/Profile/${this.membershipId}/Character/${characterID}/?components=characters`
        return ajax.getJSON<BungieResponse>(url,{'X-API-Key': this.xAPIKey}).pipe(
            map(resp => this.mapCharacterData(resp.Response.character.data))
        )
    }

    getCharactersData():Observable<D2Character[]> {
        let url = `https://www.bungie.net/Platform/Destiny2/${this.memType}/Profile/${this.membershipId}/?components=characters`
        return ajax.getJSON<BungieResponse>(url,{'X-API-Key': this.xAPIKey}).pipe(
            map(resp => {
                let charArray = []
                Object.values(resp.Response.characters.data).forEach(char => {
                    charArray.push(this.mapCharacterData(char))
                })
                return charArray
            })
        )
    }

    private mapCharacterData(data:BungieResponse["Response"]["character"]["data"]):D2Character {
        let response:D2Character = {
            time: this.minutesToNaturalTime(parseInt(data.minutesPlayedTotal)),
            light: data.light,
            intellect: data.stats['144602215'],
            resilience: data.stats['392767087'],
            discipline: data.stats['1735777505'],
            recovery: data.stats['1943323491'],
            mobility: data.stats['2996146975'],
            strength: data.stats['4244567218'],
            race:this.d2HashMap.get(data.raceHash),
            gender:this.d2HashMap.get(data.genderHash),
            pClass:this.d2HashMap.get(data.classHash),
            emblemPath:data.emblemPath,
            emblemBackgroundPath:data.emblemBackgroundPath,
            emblemColor:data.emblemColor,
        }
        return response
    }

    private minutesToNaturalTime(minutes:number) {
        let time = []
        let segments = {
            // "month": 24*60*30,
            "day": 24*60,
            "hour": 60,
            "minute": 1
        }                
        for(let seg in segments) {
          let p =  Math.floor(minutes/segments[seg]);
          if(p == 1) time.push(p + " " + seg);
          if(p >= 2) time.push(p + " " + seg + "s");
          minutes %= segments[seg]        
        }
        return time.join(", ")
    }

}
