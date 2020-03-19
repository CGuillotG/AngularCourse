import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

    @Input() heroTitle: string;
    @Input() heroSubtitle: string;
    @Input() heroColor: string;    

  constructor() { }  

  ngOnInit(): void {
  }

  getDarkColor = (color) => {
    return "dark"+color.replace(/\s/g, "")
  }
  
}
