import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importando para trabalhar com o NgModel
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //declarando o FormModule
    FormsModule,

    //esta declaração foi criada automatica
    // com o comando ng g module user  --module=app
    UserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
