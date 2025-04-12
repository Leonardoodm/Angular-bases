import { effect, Injectable, signal } from '@angular/core';
import { Characters } from '../interface/character.interface';

function loadFromLocalStorage(): Characters[] {
  const characters = localStorage.getItem('characters') ;
  return characters ? JSON.parse(characters) : [];
  return [];
}

@Injectable({ providedIn: 'root' })
export class DragonBallService {
  characters = signal<Characters[]>(loadFromLocalStorage());

  title = 'Dragon Ball Super';

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));

  });

  addCharacter(newCharacter: Characters) {
    this.characters.update((prev) => [...prev, newCharacter]);
  }
}
