import { Routes } from '@angular/router';


export const routes: Routes = [
{
    path: '',
    redirectTo: 'home'
    },
    {
        path:'home',
        component: homeComponent
    },
    {
        path: 'cadastro',
        component:Formulario
    }
]
