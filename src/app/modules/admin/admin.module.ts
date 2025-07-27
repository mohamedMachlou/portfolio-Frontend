import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ManageCertificateComponent } from './pages/manage-certificate/manage-certificate.component';
import { ManageDevopsComponent } from './pages/manage-devops/manage-devops.component';
import { ManageFrameworkComponent } from './pages/manage-framework/manage-framework.component';
import { ManageProgrammingLanguageComponent } from './pages/manage-programming-language/manage-programming-language.component';
import { ManageProjectComponent } from './pages/manage-project/manage-project.component';
import { ManageServiceComponent } from './pages/manage-service/manage-service.component';



const routes: Routes = [
  //{ path: 'login', component: LoginComponent },
  // {
  //   path: '',
  //   component: DashboardComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     // autres routes enfants comme :
  //     // { path: 'projects', component: ManageProjectsComponent },
  //   ],
  // }
];


@NgModule({

  declarations: [
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    ResetPasswordComponent,
    ManageCertificateComponent,
    ManageDevopsComponent,
    ManageFrameworkComponent,
    ManageProgrammingLanguageComponent,
    ManageProjectComponent,
    ManageServiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  
})
export class AdminModule { }
