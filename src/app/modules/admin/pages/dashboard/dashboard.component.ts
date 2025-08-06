import { FrameworkService } from './../../../core/services/framework.service';
import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../core/services/admin.service';
import { Admin } from '../../../../models/admin';
import { ProgrammingLanguageService } from '../../../core/services/programming-language.service';
import { Programming_Languages } from '../../../../models/programming_languages';
import { Framework } from '../../../../models/framework';
import { DevopsService } from '../../../core/services/devops.service';
import { Devops_Other } from '../../../../models/Devops_other';
import { ProjectService } from '../../../core/services/project.service';
import { CertificateService } from '../../../core/services/certificate.service';
import { ServiceService } from '../../../core/services/service.service';
import { Project } from '../../../../models/project';
import { Certificate } from '../../../../models/certificate';
import { Service } from '../../../../models/service';

@Component({
  selector: 'dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  // Injection
  router = inject(Router);

  // Services
  adminService = inject(AdminService);
  progLangServices = inject(ProgrammingLanguageService)
  frameworkService = inject(FrameworkService)
  desvopsService = inject(DevopsService)
  projectService = inject(ProjectService)
  certificateService = inject(CertificateService)
  serviceService = inject(ServiceService)

  // Variables
  admin = signal<Admin>({
  firstName: '',
  lastName: '',
  description: '',
  diplome: '',
  jobTitle: '',
  experience: '',
  specialty: '',
  addresse: '',
  email: '',
  password: '',
  phone: '',
  freelance: '',
  linkedin: '',
  github: '',
  facebook: '',
  instagram: '',
  twitter: '',
  photo: '',
  downloadcv: ''
});
  

  // Signals
  openMenuStatus = signal<boolean>(true);
  isScrolled = signal<boolean>(false);
  downloadcv = signal<string>('');
  github = signal<string>('');
  linkedin = signal<string>('');
  instagram = signal<string>('');
  progLanguages = signal<Programming_Languages[]>([]);
  backends = signal<Framework[]>([]);
  allDevops = signal<Devops_Other[]>([]);
  allProjects = signal<Project[]>([]);
  allCertificates = signal<Certificate[]>([]);
  allServices = signal<Service[]>([]);

  // Sections
  activeSection = 'home';
  sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];


// Ng OnInit
ngOnInit(): void {

    // Load admins
    this.adminService.getAllAdmins().subscribe(admins => {
      this.admin.set(admins[0]);
    });

    // Load Programming Languages
    this.progLangServices.getAllProgLanguages().subscribe((prog_lang) => {
      this.progLanguages.set(prog_lang)
    })

    // Load Backend Frameworks & Outils
    this.frameworkService.getAllFrameworks().subscribe((backend_Outil) => {
      this.backends.set(backend_Outil)
    })

    // Load Devops
    this.desvopsService.getAllDevops().subscribe((devops) => {
      this.allDevops.set(devops)
    })

    // Load Projects
    this.projectService.getAllProjects().subscribe((projects) => {
      this.allProjects.set(projects)
    })

    // Load Certificates
    this.certificateService.getAllCertificates().subscribe((certificates) => {
      this.allCertificates.set(certificates)
    })

    // Load Services
    this.serviceService.getAllServices().subscribe((Services) => {
      this.allServices.set(Services)
    })
    console.log(this.allProjects())

    // Get Social Links
    this.downloadcv.set(this.admin().downloadcv!);
    this.github.set(this.admin().github!);
    this.linkedin.set(this.admin().linkedin!);
    this.instagram.set(this.admin().instagram!);
}


  // Détecter scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);

    for (let section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const topOffset = 100;
        if (rect.top <= topOffset && rect.bottom >= topOffset) {
          this.activeSection = section;
          break;
        }
      }
    }
  }


  // Start Scroll Vers Section spécifique
  scrollToSection(sectionId: string) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
}
  // End Scroll Vers Section spécifique




  // Start Open and Close Menu
  switchMenu() {
    this.openMenuStatus.set(!this.openMenuStatus());
    console.log('switch status to : ', this.openMenuStatus());
  }

  closeMenu() {
    this.openMenuStatus.set(false);
  }
  // End Open and Close Menu

  // Liens externes
  goToLink(link: string): void {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
}
