import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http:HttpClient) { }

  search(value:string):Observable<any>{
    return this.http.get(`https://api.github.com/users/${value}`);
  }
}
