import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AngularCachingRoutingModule } from "../../angular-caching/angular-caching-routing.module";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-accessability',
  imports: [AngularCachingRoutingModule, RouterOutlet],
  templateUrl: './accessability.html',
  styleUrl: './accessability.scss'
})
export class Accessability {

    constructor(private readonly title: Title) {
      this.title.setTitle('Angular Accessability')
    }
}
