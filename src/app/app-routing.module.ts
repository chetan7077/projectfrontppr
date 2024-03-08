import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubtopicListComponent } from './components/subtopic-list/subtopic-list.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';

const routes: Routes = [
  {
    path:'list',
    component: SubtopicListComponent
  },
  {
    path:'list_topic',
    component:TopicListComponent
  },
  {
    path:'list_topic/:tid',
    component:SubtopicListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
