import { Component, computed, effect, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-angular-linked-signal',
  imports: [],
  templateUrl: './angular-linked-signal.component.html',
  styleUrl: './angular-linked-signal.component.scss'
})
export class AngularLinkedSignalComponent {

  mobiles:any = signal(
    {
      apple: {
        name: 'Apple',
        price: 1000,
        stock: 10
      },
      samsung: {
        name: 'Samsung',
        price: 800,
        stock: 20
      },
      oneplus: {
        name: 'OnePlus',
        price: 600,
        stock: 30
      }
    }
  )

  constructor(){
    effect(() => {
    //  console.log('Selected mobile changed:', this.selectedMobile());
    });
  }


  mobilesList = computed(() => {
    return Object.keys(this.mobiles());
  })

  // selectedMobile = linkedSignal(() => {
  //   return this.mobiles()[this.mobilesList()[0]];
  // })

  // selectedItem(item:any)
  // {
  //   this.selectedMobile.set(this.mobiles()[item]);
  // }

  // quantity = signal(0);
  // totalPrice = computed(() => {
  //   return this.selectedMobile().price * this.quantity();
  // });

  // addToCard() {
  //   this.quantity.set(this.quantity() + 1);
  // }
  // removeCard() {
  //   if (this.quantity() > 0) {
  //     this.quantity.set(this.quantity() - 1);
  //   }
  // }
}
