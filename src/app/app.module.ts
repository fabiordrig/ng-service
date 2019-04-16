import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormComponent } from './form/form.component';
import { TabelaComponent } from './tabela/tabela.component';
import { ServicoService } from './servico.service';
import { ClienteService } from './cliente.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FormComponent, TabelaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServicoService, ClienteService]
})
export class AppModule { }
