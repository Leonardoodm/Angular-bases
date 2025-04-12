import { NgClass } from '@angular/common';
import { Component, signal, computed } from '@angular/core';

interface Characters {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  // imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.scss',
})
export class DragonballComponent {
  name = signal('');
  power = signal(0);
  characters = signal<Characters[]>([
    { id: 1, name: 'Goku', power: 9001 },
  ]);

  newCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) return;

    this.characters.update((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: this.name(),
        power: this.power(),
      },
    ]);

}

  // powerClases = computed(() => {
  //   return {'text-danger': true,}
  // });

}
