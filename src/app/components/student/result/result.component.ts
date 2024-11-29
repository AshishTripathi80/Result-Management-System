import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: false,
  
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  result: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.result = navigation?.extras.state?.['result'];

    if (!this.result) {
      // Redirect to student login if no result data
      this.router.navigate(['/student']);
    }
  }
}
