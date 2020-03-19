import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-panel',
  templateUrl: './hero-panel.component.html',
  styleUrls: ['./hero-panel.component.css']
})
export class HeroPanelComponent implements OnInit {

    @Input() heroTitle: string;
    @Input() heroSubtitle: string;
    heroColor: string = "Slate Gray";
    heroSize: string = "Small";

  constructor() { }

  ngOnInit(): void {
  }

}
