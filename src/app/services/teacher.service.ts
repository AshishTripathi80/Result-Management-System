import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  deleteResult(id: number) {
    return this.http.delete(`${BASE_URL}/${id}`);
  }

  constructor(private http:HttpClient,private router:Router) { }

  getAllResults(): Observable<any> {
    return this.http.get(BASE_URL);
  }


  
  addResult(newResult:any): Observable<any> {
    return this.http.post(BASE_URL, newResult);
  }

  getResultById(id: number): Observable<any>{
    return this.http.get(`${BASE_URL}/${id}`);
  }

  editResult(id: number, updatedResult: any): Observable<any> {
    return this.http.put(`${BASE_URL}/${id}`, updatedResult);
  }

}
