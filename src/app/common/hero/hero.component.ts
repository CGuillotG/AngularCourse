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
    @Input() heroSize: string;    
    heightMap = new Map()

  constructor() { }  

  ngOnInit(): void {
    this.heightMap.set('Small',"20vh");
    this.heightMap.set('Medium',"40vh");
    this.heightMap.set('Large',"60vh");
    this.heightMap.set('Full',"calc(100vh - 56px)");
  }

  getDarkColor = (color) => {
    if (color === undefined) return "darkslategray"
    return "dark"+color.replace(/\s/g, "")
  }

  getHeight = (height) => {
    return this.heightMap.get(height)
  }
  
}
