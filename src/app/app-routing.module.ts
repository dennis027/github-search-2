import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitFormComponent } from './git-form/git-form.component';
import { GitResultsComponent } from './git-results/git-results.component';

const routes: Routes = [
{path:'git-form',component:GitFormComponent},
{path:'git-result',component:GitResultsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
