import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AlbumService } from "./albums.service";
import { loadAlbums, loadAlbumsFailure, loadAlbumsSuccess } from "./albums.actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class AlbumEffects {

  constructor( private actions$: Actions, private albumService: AlbumService){
  }

  loadAlbums$ = createEffect(()=>{
     return this.actions$.pipe(
        ofType(loadAlbums),
        switchMap(()=> this.albumService.getAlbums().pipe(
          map((albums) => loadAlbumsSuccess({albums: albums})),
          catchError((error) => of(loadAlbumsFailure({error: 'Error'})))
        ))
      )
  })
}
