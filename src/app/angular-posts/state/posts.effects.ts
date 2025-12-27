import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadPosts, loadPostsFailure, loadPostsSuccess } from "./posts.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { PostsService } from "./posts.service";


@Injectable()
export class PostsEffects {

  constructor(private actions$: Actions, private postsService: PostsService ) {}


  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      switchMap(() => this.postsService.getPosts().pipe(
        map((posts) => loadPostsSuccess({posts: posts})),
        catchError((error) => of(loadPostsFailure({error:'API failed'})))
      ))
    )
  })

}
