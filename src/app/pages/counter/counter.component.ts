import { Component, signal } from "@angular/core";

enum CounterOptions {
  increase = 1,
  decrease = -1,
  reset = 10,
}

interface CounterState {
  value: number;
  option: CounterOptions;
}

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss'],
})

export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10)

  CounterOptions = CounterOptions;

  useActionForCounter(state: CounterState): void {
    const { value, option } = state;

    switch (option) {
      case CounterOptions.increase:
        this.counter += value;
        this.counterSignal.update((prev) => prev + value);
        break;
      case CounterOptions.decrease:
        this.counter -= value;
        this.counterSignal.update((prev) => prev - value);
        break;
      case CounterOptions.reset:
        this.counter = 10;
        this.counterSignal.set(10);
        break;
    }
  }
}
