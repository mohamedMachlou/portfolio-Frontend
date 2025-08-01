import { Component, inject } from '@angular/core';
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

  




  // Go To Link 
  goToLink(link: string): void {
  window.open(link, '_blank');
}

}
