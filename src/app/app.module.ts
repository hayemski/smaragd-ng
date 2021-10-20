import { IzmenaKorisnikComponent } from './_components/izmena-korisnik/izmena-korisnik.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { DivListaComponent } from './div-lista/div-lista.component';
import { ProdajaZlatoComponent } from './prodaja-zlato/prodaja-zlato.component';
import { ModalPopravkaComponent } from './modal-popravka/modal-popravka.component';
import { HomeComponent } from './home/home.component';
import { PopravkeCreateComponent } from './popravke-create/popravke-create.component';
import { PopravkeListComponent } from './popravke-list/popravke-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './../errors/not-found/not-found.component';
import { ServerErrorComponent } from './../errors/server-error/server-error.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivEditComponent } from './div-edit/div-edit.component';
import { Errorinterceptor } from './interceptors/errorinterceptor/errorinterceptor.component';
import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';
import { AuthenticationService } from './_services/authentication.service';
import { AuthorizationCheck } from './_services/authorizationCheck';
import { httpInterceptor } from './_services/httpInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopravkeListComponent,
    PopravkeCreateComponent,
    HomeComponent,
    ModalPopravkaComponent,
    ProdajaZlatoComponent,
    DivListaComponent,
    DivEditComponent,
    LoginComponent,
    UploadComponent,
    NotFoundComponent,
    ServerErrorComponent,
    IzmenaKorisnikComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: Errorinterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    AuthorizationCheck, AuthenticationService],
  bootstrap: [AppComponent],
  entryComponents: [ ModalPopravkaComponent ]
})
export class AppModule { }
