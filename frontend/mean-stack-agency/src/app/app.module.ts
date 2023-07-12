import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importando para trabalhar com o NgModel
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { UserModule } from './user/user.module';

//criado automaticamente com o comando ng g module user --module=app
//este comando cria um arquivo user.moddule.ts
//na pasta de usuario dentro da pasta app
//com este modulo vamos comandar dois componentes

@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //declarando o FormModule
    FormsModule,

//Abaixo criado automaticamente com o comando <ng g module user --module=app>
//este comando cria um arquivo user.moddule.ts
//na pasta de user dentro do diretório app
//com este modulo vamos comandar dois componentes
  
    AboutModule,
     UserModule,

    //esta declaração foi criada automatica
    // com o comando ng g module user  --module=app
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
