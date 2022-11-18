import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationService } from './presentation.service';
import { CarrousselComponent } from './carroussel/carroussel.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'accueil/accueil1', component: CarrousselComponent },
];

@NgModule({
  declarations: [CarrousselComponent, AccueilComponent, AuthentificationComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes),
  ],
  exports: [CarrousselComponent, AccueilComponent],
  providers: [PresentationService],
})
export class PresentationModule {}
