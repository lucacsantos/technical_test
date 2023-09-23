import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { FormUserComponent } from './user/form-user/form-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './services/request.service';
import { ToastrModule } from 'ngx-toastr'

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    FormUserComponent,
    ListUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
