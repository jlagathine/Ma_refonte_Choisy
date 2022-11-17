import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('logo', [
      transition('* => *', [
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
          ])
        ),
      ]),
    ]),
    trigger('titre', [
      transition('* => *', [
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
export class AppComponent {
  title = 'Choisy-la-Vie';
}
