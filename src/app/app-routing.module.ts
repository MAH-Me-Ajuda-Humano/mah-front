import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [

{path: '',redirectTo: 'entrar', pathMatch: 'full'},
{path: 'entrar', component: EntrarComponent},
{path: 'menu', component: MenuComponent},
{path: 'rodape', component: RodapeComponent},
{path: 'cadastrar', component: CadastrarComponent},
{path: 'sobre-nos', component: SobreNosComponent},
{path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
