import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { CacheInterceptor } from './cache-interceptor';
import { ErrorInterceptor } from './error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
     //provideZoneChangeDetection({ eventCoalescing: false }),
    //  provideExperimentalZonelessChangeDetection(),
     provideRouter(appRoutes),
     //provideHttpClient(withInterceptors([AuthInterceptor])),
   
     provideHttpClient(withInterceptorsFromDi()),  
     {
         provide:HTTP_INTERCEPTORS,
         useClass:AuthInterceptor,
         multi:true
     },
     {
        provide:HTTP_INTERCEPTORS,
        useClass:CacheInterceptor,
        multi:true
      },
      {
        provide:HTTP_INTERCEPTORS,
        useClass:ErrorInterceptor,
        multi:true
      }
    ]
};
