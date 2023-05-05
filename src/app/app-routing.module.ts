import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtigosComponent } from './pages/artigos/artigos.component';

const routes: Routes = [
	{
		path:'',
		component: HomeComponent,
	},
	{
		path:'artigos',
		component: ArtigosComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
