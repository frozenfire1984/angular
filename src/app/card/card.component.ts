import {Component, OnInit, Input} from '@angular/core'
import {Card} from '../app.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {
  title: string = 'Card title'
  text: string = 'Lorem ipsum dolor sit amet.'


  @Input() card!: Card
  @Input() index!: number | undefined

  cardData = new Date()

  ngOnInit() {

  }

  /*text: string = 'Lorem ipsum dolor sit amet.'
  disabled: boolean = false

  textColor: string = ""

  imgUrl: string = 'https://angular.io/assets/images/logos/angular/shield-large.svg'

  ngOnInit() {

  }

  changeTitle() {
    this.title += "changed title"
  }*/

  /*inputHandler(event: any) {
    this.title = event.target.value)
  }*/

  /*inputHandler(value: any) {
    this.title = value
  }*/

  /*changeHandler() {
    console.log(this.title)
  }*/


}
