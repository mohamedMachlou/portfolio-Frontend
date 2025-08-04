import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../core/services/admin.service';
import { Admin } from '../../../../models/admin';

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

  // Variables
  admin = signal<Admin>({
  firstName: '',
  lastName: '',
  description: '',
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

  // Sections
  activeSection = 'home';
  sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];


// Ng OnInit
ngOnInit(): void {

    // Load admins
    this.adminService.getAllAdmins().subscribe(admins => {
      this.admin.set(admins[0]);
    });
    console.log(this.admin());

    // Get Social Links
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
