import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, ElementRef, linkedSignal, NgZone, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { AngularPiService } from './angular-pi-service';
import { CommonModule } from '@angular/common'
import { debounce, debounceTime, delay, distinctUntilChanged, forkJoin, from, fromEvent, interval, map, mergeMap, of, Subject, Subscription, switchMap, take, takeUntil } from 'rxjs';
import { AngularPiChild } from './angular-pi-child/angular-pi-child';
import { HttpClient } from '@angular/common/http';
import { AngularPiPipePipe } from './angular-pi-pipe-pipe';
import { Store } from '@ngrx/store';
import { todoList, updateTodoItem } from './state/pi-todo.actions';
import { todoPiState } from './state/pi-toto.selectors';

@Component({
  selector: 'app-angular-pi',
  imports: [CommonModule, AngularPiChild,AngularPiPipePipe],
  templateUrl: './angular-pi.html',
  styleUrl: './angular-pi.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularPi implements OnInit, OnDestroy, AfterViewInit {

  posts: any = [];

  postSignal = signal<any>([]);
  postSubscription!: Subscription;
  private postSubscription$ = new Subject<void>();

  firstPost: any;
  lastPost: any;

  count = 0;
  @ViewChild('inputElement') inputElement?: ElementRef;

  constructor(private readonly piService: AngularPiService,
    private httpClient: HttpClient,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone,
    private store: Store
  ) { }

  searchItem = '';
  searchSignal = signal('');

  todoList$ = this.store.select(todoPiState);

  ngOnInit(): void {
    this.store.dispatch(todoList());
    //this.apiCall();
    //this.initRxJsOperators();
  }

  updateState(item:any) {
    this.store.dispatch(updateTodoItem({todo:item}))
  }

  initRxJsOperators() {



    of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
      switchMap(item => of(item).pipe(delay(1000))) // 1 second delay per item
    ).subscribe(result => {
      console.log(result);
    });


    of(1, 2, 3, 4).pipe(
      delay(1000),
      mergeMap((item) => this.httpClient.get('https://jsonplaceholder.typicode.com/posts/' + item)))
        .subscribe((result: any) => {
          console.log(result);
        })


   of(1,2,3,4).pipe(
    switchMap((item) => this.httpClient.get('https://jsonplaceholder.typicode.com/posts/'+item)))
    .subscribe((result) => {
      console.log(result);
    })


    forkJoin([
      this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1'),
            this.httpClient.get('https://jsonplaceholder.typicode.com/posts/2'),
                  this.httpClient.get('https://jsonplaceholder.typicode.com/posts/3')
    ]).subscribe((result) => {
      console.log(result);
    })

  }


  ngAfterViewInit(): void {
    this.initSearchView();
  }

  initSearchView() {
    fromEvent(this.inputElement?.nativeElement, 'input').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((result) => {
      console.log(result);
      this.searchItem = result;
      this.searchSignal.set(this.searchItem);
      this.piService.setPostData(this.searchItem);
    })
  }

  getMe() {
    return 'hellloo'
  }

  recieveBack(value: any) {
    alert(value);
  }

  apiCall() {
    // this.postSubscription =  this.piService.getPosts().subscribe({
    //   next: (response) => {
    //     this.posts = response;
    //   },
    //   error: (error) => {
    //     console.log('error called');
    //   },
    //   complete: () => {
    //     console.log('complete called');
    //   }
    // })

    // this.piService.getPosts().pipe(takeUntil(this.postSubscription$)).subscribe({
    //   next: (response) => {
    //     this.posts = response;
    //   },
    //   error: (error) => {
    //     console.log('error called');
    //   },
    //   complete: () => {
    //     console.log('complete called');
    //   }
    // })

    this.piService.getPosts().pipe(takeUntil(this.postSubscription$)).subscribe({
      next: (response: any) => {
        this.postSignal.set(response);
        this.firstPost = computed(() => this.postSignal()[0]);
        this.lastPost = linkedSignal(() => this.postSignal()[0]);

        this.lastPost.update((item: any) => item.title = 'jhe');

        console.log(this.lastPost());
        console.log(this.firstPost());


      },
      error: (error) => {
        console.log('error called');
      },
      complete: () => {
        console.log('complete called');
      }
    })
  }

  postTrack(index: number, item: any) {
    return item.id;
  }

  ngOnDestroy(): void {
    // if(this.postSubscription) {
    //   this.postSubscription.unsubscribe();
    // }

    this.postSubscription$.next() // trigger all take unit
    this.postSubscription$.complete(); // complete the notifier

  }

  incCounter() {
    setTimeout(()=>{
      // this.changeDetectorRef.markForCheck();

      this.ngZone.run(()=>{
      this.count = 10;
      });
    },3000)
  }
}
