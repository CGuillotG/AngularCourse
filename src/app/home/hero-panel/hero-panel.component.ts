import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-panel',
  templateUrl: './hero-panel.component.html',
  styleUrls: ['./hero-panel.component.css']
})
export class HeroPanelComponent implements OnInit {

    heroTitle: string = 'Angular Demo';
    heroSubtitle: string = 'with 💔 by CGuillot';
    heroColor: string = "Slate Gray";
    heroSize: string = "Small";

  constructor() { }

  ngOnInit(): void {
  }

}
