import { Component, signal, computed, inject } from '@angular/core';
import { Characters } from '../../interface/character.interface';
import { ChracterListComponent } from '../../components/dragonball/chracter-list/chracter-list.component';
import { CreateChracterComponent } from '../../components/dragonball/createChracter/createChracter.component';
import { DragonBallService } from '../../service/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  // imports: [NgClass],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.scss',
  imports: [ChracterListComponent, CreateChracterComponent],
})
export class DragonballSuperComponent {
  // de esta forma se hacia anteririormente
 // constructor(public _dragonBallService: DragonBallService) {}

 // forma actual recomendada
  public _dragonBallService = inject(DragonBallService);

}
