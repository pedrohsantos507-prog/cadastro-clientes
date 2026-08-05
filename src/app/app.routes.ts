import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { CadastroCliente } from './componentes/cadastro-clientes/cadastro-clientes';
import { ListaClientes } from './componentes/lista-clientes/lista-clientes';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
{
    path: 'home',
    component: Home
},

  {
    path: 'cadastro',
    component: CadastroCliente
  },

  {
    path: 'consulta',
    component: ListaClientes
  },
];
