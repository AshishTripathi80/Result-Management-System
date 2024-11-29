import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-add-result',
  standalone: false,
  
  templateUrl: './add-result.component.html',
  styleUrl: './add-result.component.scss'
})
export class AddResultComponent {
  addRecordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private teacherService: TeacherService
  ) {
    // Initialize the form with validators
    this.addRecordForm = this.fb.group({
      rollNumber: ['', Validators.required],
      dob: ['', Validators.required],
      name: ['', Validators.required],
      marks: [null, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.addRecordForm.valid) {
      const newResult = this.addRecordForm.value;

      this.teacherService.addResult(newResult).subscribe({
        next: () => {
          alert('Record added successfully!');
          this.router.navigate(['/teacher']);
        },
        error: (err) => {
          console.error('Error adding record:', err);
          alert('An error occurred while adding the record.');
        },
      });
    }
  }
}
