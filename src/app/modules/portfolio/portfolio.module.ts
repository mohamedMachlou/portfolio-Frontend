import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TechnologieComponent } from './pages/technologie/technologie.component';
import { ProjectComponent } from './pages/project/project.component';
import { ServiceComponent } from './pages/service/service.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    TechnologieComponent,
    ProjectComponent,
    ServiceComponent,
    CertificateComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
