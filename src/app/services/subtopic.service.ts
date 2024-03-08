import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubtopicService {

  baseUrl='http://localhost:8088';

  constructor(private http:HttpClient)
   { }

   getAllSubtopic():any
   {
    return this.http.get(`${this.baseUrl}/subtopic/getAll`);

   }
}
