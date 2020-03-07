import { TablaReactivoComponent } from './components/reactivo/tabla-reactivo/tabla-reactivo.component';
import { TablaComponent } from './components/ngmodel/tabla/tabla.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: TablaComponent},
  {path: 'formReactivo', component: TablaReactivoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
