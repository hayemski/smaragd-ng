import { LoginComponent } from './login/login.component';
import { DivListaComponent } from './div-lista/div-lista.component';
import { ProdajaZlatoComponent } from './prodaja-zlato/prodaja-zlato.component';
import { PopravkeCreateComponent } from './popravke-create/popravke-create.component';
import { PopravkeListComponent } from './popravke-list/popravke-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './../errors/not-found/not-found.component';
import { ServerErrorComponent } from './../errors/server-error/server-error.component';
import { DivEditComponent } from './div-edit/div-edit.component';

import { AuthorizationCheck } from './_services/authorizationCheck';

const routes: Routes = [
  {path:  "", pathMatch:  "full", redirectTo:  "login"},
  {path: "home", component: HomeComponent, canActivate: [AuthorizationCheck]},
  {path: "popravke-list", component:PopravkeListComponent, canActivate: [AuthorizationCheck]},
  {path: "popravka-create", component: PopravkeCreateComponent, canActivate: [AuthorizationCheck]},
  {path: "zlato-prodaja", component:ProdajaZlatoComponent, canActivate: [AuthorizationCheck]},
  {path: "div-lista", component:DivListaComponent, canActivate: [AuthorizationCheck]},
  {path: "div-edit", component:DivEditComponent, canActivate: [AuthorizationCheck]},
  {path: "login", component:LoginComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
