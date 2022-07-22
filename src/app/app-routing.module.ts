import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/components/main/main.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children: [
      {
        path:'',
        redirectTo: 'main',
        pathMatch: 'full',
      },
      {
        path: 'main', 
        loadChildren: () => import('./bootsTrap/bootstrap.module').then(m => m.BootstrapModule)
      },
      {
          path: '**',
          redirectTo: 'main',
          pathMatch: 'full',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
