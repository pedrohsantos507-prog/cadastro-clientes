import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cadastro-clientes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-clientes.html',
  styleUrl: './cadastro-clientes.css'
})
export class CadastroCliente {

  cliente: Cliente = {
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
  };

  constructor(private clienteService: ClienteService) {}

  cadastrar() {
    this.clienteService.adicionar({ ...this.cliente });

    this.cliente = {
      nome: '',
      cpf: '',
      email: '',
      telefone: ''
    };

    alert('Cliente cadastrado com sucesso!');
  }

}