import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptor } from './Interceptors/error.interceptor';
import { LoginInterceptor } from './Interceptors/login.interceptor';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { UserRoutingModule } from './user/user-routing.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    AdminModule,
    AdminRoutingModule,
    UserRoutingModule,
    LoginModule,
    LoginRoutingModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoginInterceptor,multi:true},{provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
