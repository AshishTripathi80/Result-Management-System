import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'result_manangment';

  showLogoutButton = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Show the logout button only for student or teacher routes
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.showLogoutButton =
        currentRoute.includes('/student') || currentRoute.includes('/teacher');
    });
  }

  logout() {
    this.router.navigate(['/']);
  }
}
