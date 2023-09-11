import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // pipe indica que o componente que usar vai ser uma ou outra por default será primary
  // Input() indica que é uma variável de entrada
  @Input() variant: 'primary' | 'secondary' = 'primary'

}
