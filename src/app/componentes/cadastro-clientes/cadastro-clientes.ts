import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
import { ViaCepService } from '../../services/viacep.service';

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
    telefone: '',

    cep: '',
    endereco:'',
    bairro:'',
    cidade:'',
    uf:'',
    complemento:''
  };

  constructor(
    public clienteService: ClienteService,
    private viaCepService: ViaCepService,
    private router: Router
    ) {}

  //carrega o cliente para edição
ngOnInit(): void {
  const cliente = this.clienteService.obterClienteEdicao();

  if(cliente) {
    this.cliente = {...cliente };
  }
}

  //decide entre cadastrar e atualizar
   cadastrar() {

  if (this.clienteService.estaEditando()) {

    this.clienteService.atualizar({ ...this.cliente });

    alert('Cliente atualizado com sucesso!');

  } else {

    this.clienteService.adicionar({ ...this.cliente });

    alert('Cliente cadastrado com sucesso!');


  }

   //limpa o formulario
    this.cliente = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',

    cep: '',
    endereco:'',
    bairro:'',
    cidade:'',
    uf:'',
    complemento:''
  };
  this.router.navigate(['/lista'])

}

  buscarCep(): void {
    //remove pontos e traços
    const cep = this.cliente.cep.replace(/\D/g, '');

    //so consulta a API se o CEP tiver 8 números
    if(cep.length !== 8) {
      alert('CEP inválido!');
      return;
    }

    //envia uma requisição para a API
    this.viaCepService.buscarCep(cep).subscribe({
      next: (dados) => {
        if(dados.erro) {
          alert('CEP não encontrado!');
          return           
        }
        //preenche o formulario automaticamente
        this.cliente.endereco = dados.logradouro;
        this.cliente.bairro = dados.bairro;
        this.cliente.cidade = dados.localidade;
        this.cliente.uf = dados.uf;
      },
      error: () => {
        alert('Erro ao consultar o CEP.')
      }
    })

  }
}
