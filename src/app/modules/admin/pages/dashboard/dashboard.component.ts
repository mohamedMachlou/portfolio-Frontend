import { Component, HostListener, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // Injection
  router = inject(Router);

  // 
  openMenuStatus = signal<boolean>(true)
  
  isScrolled = signal<boolean>(false)
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
    if(this.isScrolled()){
      console.log('ok ok ok')
    }
  }


// Switch Open/Close Menu
switchMenu() {

  this.openMenuStatus.set(!this.openMenuStatus())
  console.log('switch status to : ', this.openMenuStatus())

}

closeMenu() {
  this.openMenuStatus.set(false)
}

  // Go To Link 
  goToLink(link: string): void {
  window.open(link, '_blank');
}

}
