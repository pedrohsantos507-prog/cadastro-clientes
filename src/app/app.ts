import { Component } from '@angular/core';
import { CadastroCliente } from './componentes/cadastro-clientes/cadastro-clientes';
import { ListaClientes } from './componentes/lista-clientes/lista-clientes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CadastroCliente,
    ListaClientes
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}