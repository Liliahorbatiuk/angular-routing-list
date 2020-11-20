import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserlistComponent } from './works/userlist/userlist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'works/cenzor', component: CenzorComponent},
  { path: 'works/userlist', component: UserlistComponent},
  { path: 'works/tasklist', component: TasklistComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
