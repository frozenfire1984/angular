import { Component } from '@angular/core';

export interface Card {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'my-app';
  //toggle: boolean = true


  cards: Card[] = [
    {title: 'card 1', text: 'foo'},
    {title: 'card 2', text: 'bar'},
    {title: 'card 3', text: 'foo bar'},
  ]
}
