import {  Component, input } from '@angular/core';
import { Characters } from '../../../interface/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './chracter-list.component.html',
})
export class ChracterListComponent {
  Characters = input<Characters[]>();
  title = input();
}
