import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsStore } from './posts.store';

@Component({
    selector: 'app-ngrx-component-store-posts',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './posts.component.html',
    providers: [PostsStore],
})
export class PostsComponent implements OnInit {
    posts$ = this.postsStore.posts$;
    albums$ = this.postsStore.albums$;
    loading$ = this.postsStore.loading$;
    error$ = this.postsStore.error$;

    constructor(private readonly postsStore: PostsStore) { }

    ngOnInit(): void {
        this.postsStore.loadPosts();
        this.postsStore.loadAlbums();
    }
}
