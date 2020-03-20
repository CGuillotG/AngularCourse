import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    heroTitle = 'Angular Demo'
    heroSubtitle = 'with 💔 by CGuillot'
    showHome = true

    toggleHome = () => {
        this.showHome = !this.showHome
    }
}
