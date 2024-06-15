import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showLogoutButton: boolean = false;
  showLoginButton: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showLogoutButton = !['/login', '/register'].includes(event.urlAfterRedirects);
        this.showLoginButton = event.urlAfterRedirects === '/register';
      }
    });
  }

  logout(): void {
    this.authService.logout();  
    this.router.navigate(['/login']);
  }
}
