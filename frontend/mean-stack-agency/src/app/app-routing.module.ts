import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ProvidersComponent } from './providers/providers.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
{path:"", component:HomeComponent},
{path:"sobre", component:AboutComponent},
{path:"contato", component:ContatoComponent},
{path:"login", component:LoginComponent},
{path:"registro", component:RegistroComponent},
{path:"providers/:id", component:ProvidersComponent},
{path:"**", component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
