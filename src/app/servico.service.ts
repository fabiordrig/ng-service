import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable()
export class ServicoService {
  private lista:Cliente[] = [];
  constructor() { }

  add(cliente:Cliente):void {
    let c:Cliente = {id: cliente.id,nome:cliente.nome, idade: cliente.idade};

    this.lista.push(c);
  }

}