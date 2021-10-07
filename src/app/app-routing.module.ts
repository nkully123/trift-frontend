import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { RouterModule, Routes} from '@angular/router';



const routes: Routes = [
	{ path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},


	// Error page
	{ path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
