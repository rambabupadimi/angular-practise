import { Component, OnInit, resource, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular-resource-api',
  imports: [CommonModule],
  templateUrl: './angular-resource-api.component.html',
  styleUrl: './angular-resource-api.component.scss'
})
export class AngularResourceApiComponent {

  userId = signal(1);
  result = resource({
    params: () => ({ id: this.userId() }),
    loader: ({ params }) => {
      return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(response => response.json());
    },
  });

  prev() {
    if (this.userId() > 1) {
      this.userId.update(id => id - 1);
    }
  }

  next() {
    this.userId.update(id => id + 1);
  }

}
