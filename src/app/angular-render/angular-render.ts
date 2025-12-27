import { AfterViewInit, Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { API_URL, Vehicle, VEHICLE } from '../app.config';

@Component({
  selector: 'app-angular-render',
  imports: [],
  templateUrl: './angular-render.html',
  styleUrl: './angular-render.scss'
})
export class AngularRender implements AfterViewInit {

  @ViewChild('listItem') listItem?: ElementRef;

  constructor(private el: ElementRef,
    private render: Renderer2,
    @Inject(API_URL) private appURL: string,
   @Inject(VEHICLE) private vehicle: Vehicle ){}

  ngAfterViewInit(): void {

      console.log(this.appURL);
      this.vehicle.start('hello')
      const el = document.createElement('p');
      el.innerText = "Hello";
      el.style.color ="red";
      document.body.appendChild(el);

      const pElement = this.render.createElement('p');
      const pText = this.render.createText('Hellow from render2');
      this.render.setStyle(pElement,'color','red');
      this.render.appendChild(pElement,pText);
      this.render.appendChild(this.listItem?.nativeElement,pElement);

    }

}
