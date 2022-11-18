import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  animations: [
    trigger('logo', [
      transition('void => *', [
        query('.card-body img', style({ opacity: 0 })),
        query(
          '.card-body img',
          stagger('3000ms', [
            animate(
              '1s ease-in',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateY(-30px)',
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(-30px)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
    trigger('titre', [
      transition('void => *', [
        query(
          '.card-body p',
          style({ opacity: 0, transform: 'translateX(-70px)' })
        ),
        query(
          '.card-body p',
          stagger('1000ms', [
            animate(
              '800ms 1.2s ease-out',
              style({ opacity: 1, transform: 'translateX(0)' })
            ),
          ])
        ),
      ]),
    ]),
  ],
})
export class AccueilComponent {
  accueilTitre = 'Choisy la Vie';

  constructor(private route: Router) {}

  goToHomePage1() {
    this.route.navigate(['accueil/accueil1']);
  }
}
