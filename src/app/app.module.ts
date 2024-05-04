import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ClienteModule } from './pages/cliente/cliente.module';
import { CadastroContaComponent } from './pages/conta/cadastro-conta/cadastro-conta.component';
import { ListagemContaComponent } from './pages/conta/listagem-conta/listagem-conta.component';
import { DepositoContaComponent } from './pages/conta/deposito-conta/deposito-conta.component';
import { SaqueContaComponent } from './pages/conta/saque-conta/saque-conta.component';
import { TransferenciaContaComponent } from './pages/conta/transferencia-conta/transferencia-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroContaComponent,
    ListagemContaComponent,
    DepositoContaComponent,
    SaqueContaComponent,
    TransferenciaContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    ClienteModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
