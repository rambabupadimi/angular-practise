import { APP_INITIALIZER, ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { CacheInterceptor } from './cache-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { UsersService } from './users.service';
import { BrowserAnimationsModule, NoopAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { AppConfig, Config, LogType } from './app.interface';

export const config: AppConfig = {
    appUrl:'http://localhost:3000',
    logType: LogType.Client
}


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
     //provideZoneChangeDetection({ eventCoalescing: false }),
    //  provideExperimentalZonelessChangeDetection(),
     provideRouter(appRoutes),
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
      {
        provide: Config,
        useValue: config
      }
    ]
};
