// OnInit allows code to be run on initialisation
import { Component, Input } from '@angular/core';

// Decorator
@Component({
  // Selector is the name to be used in the HTML
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{value}}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{value}}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{value}}</button>
  `,
  styles: [

  ]
})

export class SquareComponent {
  // Limit the acceptable values
  @Input() value: 'X' | 'O';
}
