import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';
import { Characters } from '../../../interface/character.interface';

@Component({
  selector: 'dragonball-create-chracter',
  imports: [],
  templateUrl: './createChracter.component.html',
})
export class CreateChracterComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Characters>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacters: Characters = {
      id: Math.floor(Math.random() * 100),
      name: this.name(),
      power: this.power(),
    };
    console.log({ newCharacters });

    this.newCharacter.emit(newCharacters);
    this.resetFilds();
  }
  resetFilds() {
    this.name.set('');
    this.power.set(0);
  }
}
