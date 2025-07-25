import { ChangeDetectionStrategy, Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-basic-signal',
  imports: [],
  templateUrl: './basic-signal.component.html',
  styleUrl: './basic-signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSignalComponent {
  // default signal
  counter: WritableSignal<number> = signal(0) // writable signal
  counter2 = 0;
  showIncrement: WritableSignal<boolean> = signal(true); // writable signal

  // double count
  /**
   * Computed signal are read-only signals that derive their value from other signals.
   * You define computed signals using the computed function and specifying a derivation:
   */

  doubleCount: Signal<number> = computed(() => {
    if (this.showIncrement()) {
      return this.counter() * 2
    }
    return -1;

  });

  /**
   * Advantage of computer signals:
   * 1. They are automatically updated when the signals they depend on change.
   * 2. They are memoized, meaning they only recompute when their dependencies change.
   * 3. They are read-only, so you cannot directly modify their value.
   * 4. We can do complex calculations and logic in the computed function.
   */

  /**
   * 1. Computed singals are not writable sigals, you cannot set value like below
   * doubleCount.set(3);
   */

  // Method to increment the counter
  increment() {
    setTimeout(() => {
      this.counter.update(value => value + 1);
    }, 1000)
  }

  // Method to decrement the counter
  decrement() {
    this.counter.update(value => value - 1);
  }

  // Method to reset the counter
  reset() {
    this.counter.set(0);
  }

}
