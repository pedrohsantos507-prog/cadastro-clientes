import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-clientes.html',
  styleUrl: './lista-clientes.css',
})
export class ListaClientes implements OnInit {
  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService, 
    private router: Router
    ) {}

  ngOnInit(): void {
    this.clientes = this.clienteService.listar();
  }
  editar(indice: number) {
    this.clienteService.editar(indice);

    this.router.navigate(['/cadastro'])
  }

  excluir(indice:number) {
    this.clienteService.excluir(indice)
    this.clientes = this.clienteService.listar();
  }
}
