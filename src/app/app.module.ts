import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { GitRoutingModule } from './git-routing.module'; 
import { GitFormComponent } from './git-form/git-form.component'; 
import { GitSearchResultsComponent } from './git-search-results/git-search-results.component';
import { SearchGithubService } from './search-github.service'; 
import { DateFormatPipe } from './date-format.pipe'; 
import { CloneHighlighterDirective } from './clone-highlighter.directive'; 
import { DaysCountPipe } from './days-count.pipe'; 
import { TimeAgoPipe } from 'time-ago-pipe';
import { BaseComponent } from './base/base.component'; 


@NgModule({
   
   declarations: [
      AppComponent,
      GitFormComponent,
      GitSearchResultsComponent,
      DateFormatPipe,
      CloneHighlighterDirective,
      DaysCountPipe,
     
      TimeAgoPipe,
     
      BaseComponent
   ], 

   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      GitRoutingModule
   ],
   providers: [SearchGithubService], 
   bootstrap: [AppComponent]
})
export class AppModule { }
