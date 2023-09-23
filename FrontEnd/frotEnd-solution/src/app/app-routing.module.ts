import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';

const routes: Routes = [
  { path: '', component: ListUserComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'list-user', component: CreateUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
