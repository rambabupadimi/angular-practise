import { APP_INITIALIZER, ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';

import { UserEffects } from './state/user.effects';

import { appRoutes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { CacheInterceptor } from './cache-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { UsersService } from './users.service';
import { BrowserAnimationsModule, NoopAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AppConfig, Config, LogType } from './app.interface';
import { todoFeatureKey, todoReducer } from './angular-todo/state/todo.reducers';
import { counterFeaturekey, counterReducer } from './angular-counter/state/counter.reducers';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';
import { postsFeatureKey, postsReducer } from './angular-posts/state/posts.reducers';
import { PostsEffects } from './angular-posts/state/posts.effects';
import { albumFeatureKey, albumReducer } from './angular-posts/state/albums.reducers';
import { AlbumEffects } from './angular-posts/state/albums.effects';
import { cartFeatureKey, cartReducer } from './angular-cart/state/cart.reducers';
// import { reducer, todosFeatureKey } from './angular-ngrx/reducers/todos.reducer';
import { provideZonelessChangeDetection } from '@angular/core';
import { piTodoReducer, todoPiFeatureKey } from './angular-pi/state/pi-todo.reducers';
import { PiTodoEffect } from './angular-pi/state/pi-todo.effects';


export const config: AppConfig = {
    appUrl:'http://localhost:3000',
    logType: LogType.Client
}

export interface IVehicle {
  start(message: string): void
}

export class Vehicle implements IVehicle {
  start(message: string): void {
    console.log('start',message)
  }
}

export const  VEHICLE = new InjectionToken<IVehicle>('vehicle')

export const API_URL = new InjectionToken<string>('API_URL');

export function basicLoader() {
  return ()=>{
    console.log('loader called');
    return Promise.resolve();
 }
}

export function getAppConfigurations(userService: UsersService) {
  return  () => {
    return new Promise(async (resolve,reject) => {
      const result =  userService.getUsersList();
      result.subscribe({
        next:(result) =>{
          console.log(result);
          resolve(result);
        }
      });
    });
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: basicLoader,
      deps:[],
      multi:true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: getAppConfigurations,
      deps:[UsersService],
      multi:true
    },
 // provideZoneChangeDetection({ eventCoalescing: false }),
//   provideZonelessChangeDetection(),

    // NgRx Store + Effects (standalone providers) - provide root store before router so lazy modules can register features
    provideStore({
        [todoFeatureKey]: todoReducer,
        [counterFeaturekey]: counterReducer,
        [postsFeatureKey]: postsReducer,
        [albumFeatureKey]: albumReducer,
        [cartFeatureKey]: cartReducer,
        [todoPiFeatureKey]:piTodoReducer

    }),
    provideEffects([PostsEffects, AlbumEffects,PiTodoEffect]),
    provideStoreDevtools({ maxAge: 25 }),
    provideRouterStore(),
    provideRouter(appRoutes,
      withPreloading(CustomPreloadingStrategy)
    ),
     //provideHttpClient(withInterceptors([AuthInterceptor])),
     provideHttpClient(withInterceptorsFromDi()),
    //  {
    //      provide:HTTP_INTERCEPTORS,
    //      useClass:AuthInterceptor,
    //      multi:true
    //  },
    //  {
    //     provide:HTTP_INTERCEPTORS,
    //     useClass:CacheInterceptor,
    //     multi:true
    //   },
    //   {
    //     provide:HTTP_INTERCEPTORS,
    //     useClass:ErrorInterceptor,
    //     multi:true
    //   },
  provideAnimations(),
  // feature effects (if any) registered here — keep empty array at root and register feature effects in modules
  // root effects already provided above (empty)
      {
        provide: Config,
        useValue: config
      },
      {
        provide: API_URL,
        useValue: 'http://localhost:3000'
      },
      {
        provide: VEHICLE,
        useClass: Vehicle
      }
    ]
};


