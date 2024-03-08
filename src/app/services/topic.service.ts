import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  baseUrl='http://localhost:8088';

  constructor(private http:HttpClient) 
  { }

  getAllTopic():any
  {
    return this.http.get(`${this.baseUrl}/topic/getAll`);
  }

  getOneTopic(id:number)
  {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }
}
