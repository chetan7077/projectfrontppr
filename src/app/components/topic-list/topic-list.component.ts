import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Topic } from '../../models/Topic';
import { TopicService } from '../../services/topic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css'
})
export class TopicListComponent 
{
  
  public topic:Observable<Topic[]>=of([]);

  constructor(private service:TopicService, private router:Router)
  {

  }
  ngOnInit()
  {
    this.getAll();
  }

  getAll()
  {
    this.topic=this.service.getAllTopic();
  }

  navigateToSubtopics(tid:number)
  {
    this.router.navigate(['/list_topic',tid]);
  }
  
}
