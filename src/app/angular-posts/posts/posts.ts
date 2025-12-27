import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { postsError, postsList, postsLoading } from '../state/posts.selectors';
import { loadPosts } from '../state/posts.actions';
import { CommonModule } from '@angular/common';
import { alubms } from '../state/albums.selectors';
import { loadAlbums } from '../state/albums.actions';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.scss'
})
export class Posts implements OnInit{

  postsList$ = this.store.select(postsList);
  postsLoading$ = this.store.select(postsLoading);
  postsError$ = this.store.select(postsError);

  albumsList$ = this.store.select(alubms);

  constructor(private  readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
    this.store.dispatch(loadAlbums());
  }

}
