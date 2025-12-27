import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tapResponse } from '@ngrx/operators';
import { Observable, switchMap, tap } from 'rxjs';
import { PostItem } from '../angular-posts/state/posts.model';
import { Album } from '../angular-posts/state/albums.model';
import { PostsService } from '../angular-posts/state/posts.service';
import { AlbumService } from '../angular-posts/state/albums.service';

export interface PostsState {
    posts: PostItem[];
    albums: Album[];
    loading: boolean;
    error: any;
}

const initialState: PostsState = {
    posts: [],
    albums: [],
    loading: false,
    error: null,
};

@Injectable()
export class PostsStore extends ComponentStore<PostsState> {
    constructor(
        private postsService: PostsService,
        private albumService: AlbumService
    ) {
        super(initialState);
    }

    // Selectors
    readonly posts$ = this.select((state) => state.posts);
    readonly albums$ = this.select((state) => state.albums);
    readonly loading$ = this.select((state) => state.loading);
    readonly error$ = this.select((state) => state.error);

    // Updaters
    readonly setPosts = this.updater((state, posts: PostItem[]) => ({
        ...state,
        posts,
        loading: false,
    }));

    readonly setAlbums = this.updater((state, albums: Album[]) => ({
        ...state,
        albums,
        loading: false,
    }));

    readonly setLoading = this.updater((state, loading: boolean) => ({
        ...state,
        loading,
    }));

    readonly setError = this.updater((state, error: any) => ({
        ...state,
        error,
        loading: false,
    }));

    // Effects
    readonly loadPosts = this.effect((trigger$) =>
        trigger$.pipe(
            tap(() => this.setLoading(true)),
            switchMap(() =>
                this.postsService.getPosts().pipe(
                    tapResponse(
                        (posts: PostItem[]) => this.setPosts(posts),
                        (error: any) => this.setError(error)
                    )
                )
            )
        )
    );

    readonly loadAlbums = this.effect((trigger$) =>
        trigger$.pipe(
            tap(() => this.setLoading(true)),
            switchMap(() =>
                this.albumService.getAlbums().pipe(
                    tapResponse(
                        (albums: Album[]) => this.setAlbums(albums),
                        (error: any) => this.setError(error)
                    )
                )
            )
        )
    );
}
