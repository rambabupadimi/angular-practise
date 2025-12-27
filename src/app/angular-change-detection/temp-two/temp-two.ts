import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TempService } from '../../temp-service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-temp-two',
  imports: [],
  templateUrl: './temp-two.html',
  styleUrl: './temp-two.scss'
})
export class TempTwo implements OnInit, OnDestroy{


  @Input() message: string = '';

  newMessage = '';
  private destroy$ = new Subject<void>();



  constructor(private tempService: TempService){
  }


  ngOnInit(): void {
    this.tempService.tempDataObservable$
    .pipe(takeUntil(this.destroy$))
    .subscribe((result) => {
      console.log(result);
      this.newMessage = result;
    })
  }

   ngOnDestroy(): void {
      this.destroy$.next(); // Emit a signal to complete subscriptions
      this.destroy$.complete(); // Clean up the subject itself
  }


}
