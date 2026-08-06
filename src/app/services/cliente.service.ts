import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: Cliente[] = [];
  clienteEmEdicao: Cliente | null = null;
  indiceEdicao: number = -1;

  editar(indice: number): void{
    this.indiceEdicao = indice;
    this.clienteEmEdicao = {...this.clientes[indice] }; 
  }

  atualizar(cliente: Cliente): void {
    if (this.indiceEdicao !== -1) {
      this.clientes[this.indiceEdicao] = cliente;
      this.salvarClientes();

      this.indiceEdicao = -1;
      this.clienteEmEdicao = null;
    }
  }

  excluir(indice: number): void {
    this.clientes.splice(indice, 1);
    this.salvarClientes();
  }

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
  estaEditando(): boolean {
    return this.indiceEdicao !== -1 

    
  }

}