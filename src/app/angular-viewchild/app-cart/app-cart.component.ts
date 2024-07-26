import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCartItemComponent } from '../app-cart-item/app-cart-item.component';

@Component({
  selector: 'app-app-cart',
  standalone: true,
  imports: [CommonModule, AppCartItemComponent],
  templateUrl: './app-cart.component.html',
  styleUrl: './app-cart.component.css',
})
export class AppCartComponent {}
