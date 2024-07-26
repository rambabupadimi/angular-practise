import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { CacheService } from "./cache.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private cacheService: CacheService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('called error interceptor');
        return next.handle(req);
      

    }

} 