import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-dashboard',
  standalone: false,
  
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {
  studentLoginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private studentService: StudentService
  ) {
    this.studentLoginForm = this.fb.group({
      rollNumber: ['', Validators.required],
      dob: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.studentLoginForm.valid) {
      const { rollNumber, dob } = this.studentLoginForm.value;

      // Fetch student data
      this.studentService.getResulsByRollnumberAndDob(rollNumber,dob).subscribe({
        next: (data: any) => {
          if (data.length > 0) {
            // Navigate to StudentResultComponent with data
            this.router.navigate(['/student/result'], { state: { result: data[0] } });
          } else {
            this.errorMessage = 'No record found for the given Roll Number and DOB.';
          }
        },
        error: (err) => {
          console.error('Error fetching student data:', err);
          this.errorMessage = 'An error occurred. Please try again later.';
        },
      });
    }
  }
}
