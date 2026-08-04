import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: Cliente[] = [];

  constructor() {
    this.carregarClientes();
  }

  listar(): Cliente[] {
    return this.clientes;
  }

  adicionar(cliente: Cliente): void {
    this.clientes.push(cliente);
    this.salvarClientes();
  }

  private salvarClientes(): void {
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  private carregarClientes(): void {
    const dados = localStorage.getItem('clientes');

    if (dados) {
      this.clientes = JSON.parse(dados);
    }
  }

}