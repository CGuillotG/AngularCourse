import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    activePage:string = 'home'

    @Output() pageSelected = new EventEmitter<string>();

    onSelect(page: string) {
        this.pageSelected.emit(page)
        this.activePage = page
    }

  constructor() { }

  ngOnInit(): void {
  }

}
