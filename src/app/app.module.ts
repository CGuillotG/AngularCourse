import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HeroComponent } from './common/hero/hero.component';
import { HeroPanelComponent } from './home/hero-panel/hero-panel.component';
import { ButtonPanelComponent } from './home/button-panel/button-panel.component';
import { ArmoryComponent } from './armory/armory.component';
import { WeaponDetailsComponent } from './armory/weapon-details/weapon-details.component';
import { CartComponent } from './armory/cart/cart.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterSelectComponent } from './characters/character-select/character-select.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HeroPanelComponent,
    ButtonPanelComponent,
    WeaponDetailsComponent,
    CartComponent,
    ArmoryComponent,
    CharactersComponent,
    CharacterSelectComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
