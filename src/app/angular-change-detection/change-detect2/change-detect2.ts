import { ChangeDetectionStrategy, Component, DoCheck, signal } from '@angular/core';

@Component({
  selector: 'app-change-detect2',
  imports: [],
  templateUrl: './change-detect2.html',
  styleUrl: './change-detect2.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetect2  implements DoCheck {

  count = signal(0);

  inc() {
    this.count.update((count)=> count+1 );
  }

    ngDoCheck(): void {
    console.log('Do check change detect2');
  }

}
