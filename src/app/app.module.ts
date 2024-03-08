import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { SubtopicListComponent } from './components/subtopic-list/subtopic-list.component';
import { ROUTES, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TopicListComponent } from './components/topic-list/topic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    SubtopicListComponent,
    TopicListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
