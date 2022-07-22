import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { UsersComponent } from "./components/users/users.component";


const routes: Routes = [
    {
      path:'',
      component: UsersComponent
    },
    {
        path: "editUser",
        component: EditUserComponent,
        //canActivate: [AuthGuard],
      },
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule
    ]
  })
  export class HomeRoutingModule {}