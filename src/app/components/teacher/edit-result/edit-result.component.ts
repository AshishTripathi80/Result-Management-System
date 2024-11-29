import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-edit-result',
  standalone: false,
  
  templateUrl: './edit-result.component.html',
  styleUrl: './edit-result.component.scss'
})
export class EditResultComponent {
  editRecordForm: FormGroup;
  resultId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService
  ) {
    // Initialize the form with validators
    this.editRecordForm = this.fb.group({
      rollNumber: ['', Validators.required],
      dob: ['', Validators.required],
      name: ['', Validators.required],
      marks: [null, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    // Get the record ID from the route params
    this.resultId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch the existing record data
    this.teacherService.getResultById(this.resultId).subscribe({
      next: (record: any) => {
        // Populate the form with the existing data
        this.editRecordForm.patchValue(record);
      },
      error: (err) => {
        console.error('Error fetching record:', err);
        alert('Record not found.');
        this.router.navigate(['/teacher-login']);
      },
    });
  }

  onSubmit(): void {
    if (this.editRecordForm.valid && this.resultId !== null) {
      const updatedRecord = this.editRecordForm.value;

      this.teacherService.editResult(this.resultId,updatedRecord).subscribe({
        next: () => {
          alert('Record updated successfully!');
          this.router.navigate(['/teacher']);
        },
        error: (err) => {
          console.error('Error updating record:', err);
          alert('An error occurred while updating the record.');
        },
      });
    }
  }
}
