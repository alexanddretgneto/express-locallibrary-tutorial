import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importando para trabalhar com o NgModel
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//criado automaticamente com o comando ng g module user --module=app
//este comando cria um arquivo about.moddule.ts
//na pasta de uabout dentro do diretótio app
//com este modulo vamos comandar apenas About


import { AboutModule } from './about/about.module';

//criado automaticamente com o comando ng g module user --module=app
//este comando cria um arquivo user.moddule.ts
//na pasta de usuario dentro da pasta app
//com este modulo vamos comandar dois componentes
// Registro e Login

import { UserModule } from './user/user.module';
import { ProvidersComponent } from './providers/providers.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent,
    HomeComponent,
    ContatoComponent,
    NotfoundComponent,
   
    
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

//criado automaticamente com o comando ng g module user --module=app
//este comando cria um arquivo user.moddule.ts
//na pasta de usuario dentro da pasta app
//com este modulo vamos comandar dois componentes
// Registro e Login

     UserModule,

    //esta declaração foi criada automatica
    // com o comando ng g module user  --module=app
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
