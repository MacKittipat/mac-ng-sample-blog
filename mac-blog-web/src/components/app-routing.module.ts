import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PostDetailComponent} from './pages/post-detail/post-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'post/:postId', component: PostDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
