import { Component, OnInit } from '@angular/core';
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
export class CadastroCliente implements OnInit {

  cliente: Cliente = {
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
  };

  constructor(public clienteService: ClienteService) {}
ngOnInit(): void {
  const cliente = this.clienteService.obterClienteEdicao();

  if(cliente) {
    this.cliente = {...cliente };
  }
}
   cadastrar() {

  if (this.clienteService.estaEditando()) {

    this.clienteService.atualizar({ ...this.cliente });

    alert('Cliente atualizado com sucesso!');

  } else {

    this.clienteService.adicionar({ ...this.cliente });

    alert('Cliente cadastrado com sucesso!');

  }

  this.cliente = {
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
  };

}

}