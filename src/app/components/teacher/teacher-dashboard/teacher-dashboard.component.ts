import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: false,
  
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.scss'
})
export class TeacherDashboardComponent {
  
  results :any[]= [];
  
  constructor(private router:Router, private http:HttpClient, private teacherService:TeacherService){}

  ngOnInit(){
    	this.fetchResults();
  }

  fetchResults(){
      this.teacherService.getAllResults().subscribe((res:any)=>{
        this.results=res
      });
  }

  editResults(id:number){
    this.router.navigate([`/teacher/edit-record/${id}`]);
  }

  deleteResult(id:number){
    this.teacherService.deleteResult(id).subscribe(()=>{
      this.fetchResults();
    });
  }

  logout(){
    this.router.navigate(['/']);
  }
}
