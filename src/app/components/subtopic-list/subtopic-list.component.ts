import { Component } from '@angular/core';
import { SubtopicService } from '../../services/subtopic.service';
import { Observable, of } from 'rxjs';
import { Subtopic } from '../../models/Subtopic';

@Component({
  selector: 'app-subtopic-list',
  templateUrl: './subtopic-list.component.html',
  styleUrl: './subtopic-list.component.css'
})
export class SubtopicListComponent 
{
  public subtopic:Observable<Subtopic[]>=of([]);

  constructor(private service:SubtopicService)
  {

  }

  ngOnInit()
  {
    this.getAll();
  }

  getAll()
  {
    this.subtopic=this.service.getAllSubtopic();
  }

}
