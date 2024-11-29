import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './components/teacher/teacher-dashboard/teacher-dashboard.component';
import { AddResultComponent } from './components/teacher/add-result/add-result.component';
import { ResultComponent } from './components/student/result/result.component';
import { EditResultComponent } from './components/teacher/edit-result/edit-result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'student', component:StudentDashboardComponent},
  {path: 'teacher', component:TeacherDashboardComponent},
  {path: 'teacher/add-result',component:AddResultComponent},
  {path: 'student/result', component:ResultComponent},
  { path: 'teacher/edit-record/:id', component: EditResultComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
